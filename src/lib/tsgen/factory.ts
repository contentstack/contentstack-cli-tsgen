import {DocumentationGenerator} from './docgen/doc'
import NullDocumentationGenerator from './docgen/nulldoc'
import * as ContentstackTypes from '../stack/schema'
import * as _ from 'lodash'

export type TSGenOptions = {
  docgen: DocumentationGenerator;
  naming?: {
    prefix: string;
  };
};

export type TSGenResult = {
  definition: string;
  metadata: {
    name: string;
    types: {
      javascript: Set<string>;
      contentstack: Set<string>;
      globalFields: Set<string>;
    };
    dependencies: {
      globalFields: GlobalFieldCache;
      contentTypes: Set<string>;
    };
  };
};

type GlobalFieldCache = {
  [prop: string]: { definition: string };
};

enum TypeFlags {
  BuiltinJS = 1 << 0,
  BuiltinCS = 1 << 1,
  UserGlobalField = 1 << 2,
  UserBlock = 1 << 3,
  UserGroup = 1 << 4,
  UserReference = 1 << 5,
}

type TypeMapMatch = {
  func: (field: ContentstackTypes.Field) => string;
  track: boolean;
  flag: TypeFlags;
};

type TypeMap = {
  [prop: string]: TypeMapMatch;
};

const defaultOptions: TSGenOptions = {
  docgen: new NullDocumentationGenerator(),
  naming: {
    prefix: '',
  },
}

export default function (userOptions: TSGenOptions) {
  const options = Object.assign({}, defaultOptions, userOptions)
  const visitedJSTypes = new Set<string>()
  const visitedCSTypes = new Set<string>()
  const visitedGlobalFields = new Set<string>()
  const visitedContentTypes = new Set<string>()
  const cachedGlobalFields: GlobalFieldCache = {}

  const typeMap: TypeMap = {
    text: {func: type_text, track: true, flag: TypeFlags.BuiltinJS},
    number: {func: type_number, track: true, flag: TypeFlags.BuiltinJS},
    isodate: {func: type_text, track: true, flag: TypeFlags.BuiltinJS},
    boolean: {func: type_boolean, track: true, flag: TypeFlags.BuiltinJS},
    blocks: {func: type_modular_blocks, track: false, flag: TypeFlags.UserBlock},
    global_field: {
      func: type_global_field,
      track: true,
      flag: TypeFlags.UserGlobalField,
    },
    group: {func: type_group, track: false, flag: TypeFlags.UserGroup},
    link: {func: type_link, track: true, flag: TypeFlags.BuiltinCS},
    file: {func: type_file, track: true, flag: TypeFlags.BuiltinCS},
    reference: {
      func: type_reference,
      track: true,
      flag: TypeFlags.UserReference,
    },
  }

  function track_dependency(field: ContentstackTypes.Field, type: string, flag: TypeFlags) {
    if (flag === TypeFlags.BuiltinJS) {
      visitedJSTypes.add(type)
    } else if (flag === TypeFlags.UserGlobalField) {
      const _type = name_type(field.reference_to)
      visitedGlobalFields.add(_type)

      if (!cachedGlobalFields[_type]) {
        cachedGlobalFields[_type] = {
          definition: visit_content_type(field),
        }
      }
    } else if (flag === TypeFlags.BuiltinCS) {
      visitedCSTypes.add(type)
    } else if (flag === TypeFlags.UserReference) {
      if (Array.isArray(field.reference_to)) {
        field.reference_to.forEach(v => {
          visitedContentTypes.add(name_type(v))
        })
      }
    }
  }

  function name_type(uid: string) {
    return [options?.naming?.prefix, _.upperFirst(_.camelCase(uid))]
    .filter(v => v)
    .join('')
  }

  function define_interface(
    contentType: ContentstackTypes.ContentType | ContentstackTypes.GlobalField
  ) {
    return ['export interface', name_type(contentType.data_type === 'global_field' ? (contentType.reference_to as string) : contentType.uid)].join(' ')
  }

  function op_array(type: string, field: ContentstackTypes.Field) {
    let op = ''

    if (field.multiple) {
      op = '[]'

      if (field.max_instance) {
        const elements = new Array(field.max_instance).fill(type as any)
        return ['[', elements.join(', '), ']'].join('')
      }
    }

    return type + op
  }

  function op_required(required: boolean) {
    return required ? '' : '?'
  }

  function op_paren(block: string) {
    return `(${block})`
  }

  function visit_field_choices(field: ContentstackTypes.Field) {
    const choices = field.enum.choices
    const length = choices.length

    if (!choices && !length) return ''

    function get_value(choice: { value: string }) {
      if (field.data_type === 'number') {
        return choice.value
      }

      return `${JSON.stringify(choice.value)}`
    }

    return op_paren(choices.map(v => get_value(v)).join(' | '))
  }

  function visit_block_names(
    field: ContentstackTypes.Field,
    except: ContentstackTypes.Block
  ) {
    const uids: string[] = []

    field.blocks.forEach(block => {
      if (block.uid !== except.uid) {
        uids.push(`${block.uid}: undefined;`)
      }
    })

    return uids.join('\n')
  }

  function visit_field_type(field: ContentstackTypes.Field) {
    let type = 'any'

    if (field.enum) {
      type = visit_field_choices(field)
    } else {
      const match = typeMap[field.data_type]

      if (match) {
        type = match.func(field)

        if (match.track) {
          track_dependency(field, type, match.flag)
        }
      }
    }

    return op_array(type, field)
  }

  function visit_field(field: ContentstackTypes.Field) {
    let fieldType = '';
    if (field.data_type === 'global_field' && cachedGlobalFields[name_type(field.reference_to)]) {
        fieldType = name_type(field.reference_to);
    }
    return [
      field.uid + op_required(field.mandatory) + ':',
      fieldType || visit_field_type(field) + ';',
    ].join(' ')
  }

  function visit_fields(schema: ContentstackTypes.Schema) {
    return schema
    .map(v => {
      return [options.docgen.field(v.display_name), visit_field(v)]
      .filter(v => v)
      .join('\n')
    })
    .join('\n')
  }

  function visit_content_type(
    contentType: ContentstackTypes.ContentType | ContentstackTypes.GlobalField
  ) {
    return [
      options.docgen.interface(contentType.description),
      define_interface(contentType),
      '{',
      visit_fields(contentType.schema),
      '}',
    ]
    .filter(v => v)
    .join('\n')
  }

  function visit_modular_block(
    field: ContentstackTypes.Field,
    block: ContentstackTypes.Block
  ) {
    return (
      '{' +
      [block.uid + ':', block.reference_to ? name_type(block.reference_to as string) + ';' : '{' + visit_fields(block.schema || []) + '};'].join(' ') +
      visit_block_names(field, block) +
      '}'
    )
  }

  function type_modular_blocks(field: ContentstackTypes.Field) {
    return op_paren(
      field.blocks.map(block => visit_modular_block(field, block)).join(' | ')
    )
  }

  function type_group(field: ContentstackTypes.Field) {
    return ['{', visit_fields(field.schema), '}'].filter(v => v).join('\n')
  }

  function type_text() {
    return 'string'
  }

  function type_number() {
    return 'number'
  }

  function type_boolean() {
    return 'boolean'
  }

  function type_link() {
    return `${options.naming?.prefix}Link`
  }

  function type_file() {
    return `${options.naming?.prefix}File`
  }

  function type_global_field(field: ContentstackTypes.GlobalField) {
    if (!field.schema) {
      throw new Error(
        `Schema not found for global field '${field.uid}. Did you forget to include it?`
      )
    }

    const name = name_type(field.reference_to)

    return name
  }

  function type_reference(field: ContentstackTypes.Field) {
    const references: string[] = []

    if (Array.isArray(field.reference_to)) {
      field.reference_to.forEach(v => {
        references.push(name_type(v))
      })
    }

    return ['(', references.join(' | '), ')', '[]'].join('')
  }

  return function (contentType: ContentstackTypes.ContentType): TSGenResult|any {
    if (contentType.schema_type == 'global_field') {
      const name = name_type(contentType.uid);
      if (!cachedGlobalFields[name]) {
        cachedGlobalFields[name] = {
          definition: visit_content_type(contentType),
        }
      }
      return {
        definition: cachedGlobalFields[name].definition,
        isGlobalField: true,
      };
    }
    return {
      definition: visit_content_type(contentType),
      metadata: {
        name: name_type(contentType.uid),
        types: {
          javascript: visitedJSTypes,
          contentstack: visitedCSTypes,
          globalFields: visitedGlobalFields,
        },
        dependencies: {
          globalFields: cachedGlobalFields,
          contentTypes: visitedContentTypes,
        },
      },
    }
  }
}
