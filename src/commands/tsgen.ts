import {Command, flags} from '@contentstack/cli-command'
import {getGlobalFields, stackConnect, StackConnectionConfig} from '../lib/stack/client'
import {ContentType} from '../lib/stack/schema'
import tsgenRunner from '../lib/tsgen/runner'

export default class TypeScriptCodeGeneratorCommand extends Command {
  static description = 'generate TypeScript typings from a Stack';

  static examples = [
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" -p "I"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --no-doc',
  ];

  static flags = {
    'token-alias': flags.string({
      char: 'a',
      description: 'delivery token alias',
      hidden: false,
      multiple: false,
      required: true,
    }),

    output: flags.string({
      char: 'o',
      description: 'full path to output',
      hidden: false,
      multiple: false,
      required: true,
    }),

    prefix: flags.string({
      char: 'p',
      description: 'interface prefix, e.g. "I"',
      hidden: false,
      multiple: false,
      default: '',
      required: false,
    }),

    doc: flags.boolean({
      char: 'd',
      description: 'include documentation comments',
      default: true,
      allowNo: true,
    }),
  };

  async run() {
    try {
      const {flags} = this.parse(TypeScriptCodeGeneratorCommand)

      const token = this.getToken(flags['token-alias'])
      const prefix = flags.prefix
      const includeDocumentation = flags.doc
      const outputPath = flags.output

      if (token.type !== 'delivery') {
        this.warn('Possibly using a management token. You may not be able to connect to your Stack. Please use a delivery token.')
      }

      if (!outputPath || !outputPath.trim()) {
        this.error('Please provide an output path.', {exit: 2})
      }

      const config: StackConnectionConfig = {
        apiKey: token.apiKey,
        token: token.token,
        region: (this.region.name === 'NA') ? 'us' : this.region.name.toLowerCase(),
        environment: token.environment || '',
      }

      const [client, globalFields] = await Promise.all([stackConnect(this.deliveryAPIClient.Stack, config), getGlobalFields(config)])

      let schemas: ContentType[] = []
      if (client.types?.length) {
        if ((globalFields as any)?.global_fields?.length) {
          schemas = schemas.concat((globalFields as any).global_fields as ContentType)
          schemas = schemas.map(schema => ({
            ...schema,
            schema_type: 'global_field',
          }))
        }
        schemas = schemas.concat(client.types)
        const result = await tsgenRunner(outputPath, schemas, prefix, includeDocumentation)
        this.log(`Wrote ${result.definitions} Content Types to '${result.outputPath}'.`)
      } else {
        this.log('No Content Types exist in the Stack.')
      }
    } catch (error) {
      this.error(error, {exit: 1})
    }
  }
}
