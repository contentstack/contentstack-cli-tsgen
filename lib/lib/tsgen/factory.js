"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nulldoc_1 = require("./docgen/nulldoc");
const _ = require("lodash");
var TypeFlags;
(function (TypeFlags) {
    TypeFlags[TypeFlags["BuiltinJS"] = 1] = "BuiltinJS";
    TypeFlags[TypeFlags["BuiltinCS"] = 2] = "BuiltinCS";
    TypeFlags[TypeFlags["UserGlobalField"] = 4] = "UserGlobalField";
    TypeFlags[TypeFlags["UserBlock"] = 8] = "UserBlock";
    TypeFlags[TypeFlags["UserGroup"] = 16] = "UserGroup";
    TypeFlags[TypeFlags["UserReference"] = 32] = "UserReference";
})(TypeFlags || (TypeFlags = {}));
const defaultOptions = {
    docgen: new nulldoc_1.default(),
    naming: {
        prefix: '',
    },
};
function default_1(userOptions) {
    const options = Object.assign({}, defaultOptions, userOptions);
    const visitedJSTypes = new Set();
    const visitedCSTypes = new Set();
    const visitedGlobalFields = new Set();
    const visitedContentTypes = new Set();
    const cachedGlobalFields = {};
    const typeMap = {
        text: { func: type_text, track: true, flag: TypeFlags.BuiltinJS },
        number: { func: type_number, track: true, flag: TypeFlags.BuiltinJS },
        isodate: { func: type_text, track: true, flag: TypeFlags.BuiltinJS },
        boolean: { func: type_boolean, track: true, flag: TypeFlags.BuiltinJS },
        blocks: { func: type_modular_blocks, track: false, flag: TypeFlags.UserBlock },
        global_field: {
            func: type_global_field,
            track: true,
            flag: TypeFlags.UserGlobalField,
        },
        group: { func: type_group, track: false, flag: TypeFlags.UserGroup },
        link: { func: type_link, track: true, flag: TypeFlags.BuiltinCS },
        file: { func: type_file, track: true, flag: TypeFlags.BuiltinCS },
        reference: {
            func: type_reference,
            track: true,
            flag: TypeFlags.UserReference,
        },
    };
    function track_dependency(field, type, flag) {
        if (flag === TypeFlags.BuiltinJS) {
            visitedJSTypes.add(type);
        }
        else if (flag === TypeFlags.UserGlobalField) {
            visitedGlobalFields.add(type);
            if (!cachedGlobalFields[type]) {
                cachedGlobalFields[type] = {
                    definition: visit_content_type(field),
                };
            }
        }
        else if (flag === TypeFlags.BuiltinCS) {
            visitedCSTypes.add(type);
        }
        else if (flag === TypeFlags.UserReference) {
            if (Array.isArray(field.reference_to)) {
                field.reference_to.forEach(v => {
                    visitedContentTypes.add(name_type(v));
                });
            }
        }
    }
    function name_type(uid) {
        var _a;
        return [(_a = options === null || options === void 0 ? void 0 : options.naming) === null || _a === void 0 ? void 0 : _a.prefix, _.upperFirst(_.camelCase(uid))]
            .filter(v => v)
            .join('');
    }
    function define_interface(contentType) {
        return ['export interface', name_type(contentType.uid)].join(' ');
    }
    function op_array(type, field) {
        let op = '';
        if (field.multiple) {
            op = '[]';
            if (field.max_instance) {
                const elements = new Array(field.max_instance).fill(type);
                return ['[', elements.join(', '), ']'].join('');
            }
        }
        return type + op;
    }
    function op_required(required) {
        return required ? '' : '?';
    }
    function op_paren(block) {
        return `(${block})`;
    }
    function visit_field_choices(field) {
        const choices = field.enum.choices;
        const length = choices.length;
        if (!choices && !length)
            return '';
        function get_value(choice) {
            if (field.data_type === 'number') {
                return choice.value;
            }
            return `${JSON.stringify(choice.value)}`;
        }
        return op_paren(choices.map(v => get_value(v)).join(' | '));
    }
    function visit_block_names(field, except) {
        const uids = [];
        field.blocks.forEach(block => {
            if (block.uid !== except.uid) {
                uids.push(`${block.uid}: undefined;`);
            }
        });
        return uids.join('\n');
    }
    function visit_field_type(field) {
        let type = 'any';
        if (field.enum) {
            type = visit_field_choices(field);
        }
        else {
            const match = typeMap[field.data_type];
            if (match) {
                type = match.func(field);
                if (match.track) {
                    track_dependency(field, type, match.flag);
                }
            }
        }
        return op_array(type, field);
    }
    function visit_field(field) {
        return [
            field.uid + op_required(field.mandatory) + ':',
            visit_field_type(field) + ';',
        ].join(' ');
    }
    function visit_fields(schema) {
        return schema
            .map(v => {
            return [options.docgen.field(v.display_name), visit_field(v)]
                .filter(v => v)
                .join('\n');
        })
            .join('\n');
    }
    function visit_content_type(contentType) {
        return [
            options.docgen.interface(contentType.description),
            define_interface(contentType),
            '{',
            visit_fields(contentType.schema),
            '}',
        ]
            .filter(v => v)
            .join('\n');
    }
    function visit_modular_block(field, block) {
        return ('{' +
            [block.uid + ':', '{' + visit_fields(block.schema || []) + '};'].join(' ') +
            visit_block_names(field, block) +
            '}');
    }
    function type_modular_blocks(field) {
        return op_paren(field.blocks.map(block => visit_modular_block(field, block)).join(' | '));
    }
    function type_group(field) {
        return ['{', visit_fields(field.schema), '}'].filter(v => v).join('\n');
    }
    function type_text() {
        return 'string';
    }
    function type_number() {
        return 'number';
    }
    function type_boolean() {
        return 'boolean';
    }
    function type_link() {
        var _a;
        return `${(_a = options.naming) === null || _a === void 0 ? void 0 : _a.prefix}Link`;
    }
    function type_file() {
        var _a;
        return `${(_a = options.naming) === null || _a === void 0 ? void 0 : _a.prefix}File`;
    }
    function type_global_field(field) {
        if (!field.schema) {
            throw new Error(`Schema not found for global field '${field.uid}. Did you forget to include it?`);
        }
        const name = name_type(field.uid);
        return name;
    }
    function type_reference(field) {
        const references = [];
        if (Array.isArray(field.reference_to)) {
            field.reference_to.forEach(v => {
                references.push(name_type(v));
            });
        }
        return ['(', references.join(' | '), ')', '[]'].join('');
    }
    return function (contentType) {
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
        };
    };
}
exports.default = default_1;
