import {Command, flags} from '@contentstack/cli-command'
import {stackConnect, StackConnectionConfig} from '../lib/stack/client'
import tsgenRunner from '../lib/tsgen/runner'

export default class TypeScriptCodeGeneratorCommand extends Command {
  static description = 'Generate TypeScript typings from a Stack.';

  static examples = [
    '$ csdx tsgen -a "delivery-token-alias" -o "contentstack/generated.d.ts"',
    '$ csdx tsgen -p "I" -a "delivery-token-alias" -o "contentstack/generated.d.ts"',
  ];

  static flags = {
    'token-alias': flags.string({
      char: 'a',
      description: 'Delivery Token Alias',
      hidden: false,
      multiple: false,
      required: true,
    }),

    output: flags.string({
      char: 'o',
      description: 'Full path to output',
      hidden: false,
      multiple: false,
      required: true,
    }),

    prefix: flags.string({
      char: 'p',
      description: 'Interface prefix, e.g. "I"',
      hidden: false,
      multiple: false,
      default: '',
      required: false,
    }),
  };

  async run() {
    try {
      const {flags} = this.parse(TypeScriptCodeGeneratorCommand)
      const tokenAlias = flags['token-alias']
      const prefix = flags.output

      const token = this.getToken(tokenAlias)

      const config: StackConnectionConfig = {
        apiKey: token.apiKey,
        token: token.token,
        region: this.region,
        environment: token.environment || '',
      }

      const client = await stackConnect(this.deliveryAPIClient.Stack, config)

      if (client.types) {
        const result = await tsgenRunner(flags.output, client.types, prefix)
        this.log(`Wrote ${result.definitions} Content Types to '${result.outputPath}'.`)
      } else {
        this.log('No Content Types exist in the Stack.')
      }
    } catch (error) {
      this.error(error, {exit: 1})
    }
  }
}
