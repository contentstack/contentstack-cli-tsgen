import {Command, flags} from '@contentstack/cli-command'
import {stackConnect, StackConnectionConfig} from '../lib/stack/client'
import tsgenRunner from '../lib/tsgen/runner'
import getSdl from '../lib/util/graphql'
import { 
  buildClientSchema, 
  printSchema,
} from 'graphql'
import { spawn } from 'child_process'
import { promises as fsPromises } from 'fs'
import * as YAML from 'yaml'

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

    graphql: flags.boolean({
      description: 'support graphql schema',
      default: false,
    }),
  };

  async run() {
    try {
      const {flags} = this.parse(TypeScriptCodeGeneratorCommand)

      const token = this.getToken(flags['token-alias'])
      const prefix = flags.prefix
      const graphql = flags.graphql
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
        region: (this.region.name === 'EU') ? 'EU' : null,
        environment: token.environment || '',
      }

      if (flags.graphql) {
        let codegenConfig = this.generateCodegenConfig(outputPath)
        await fsPromises.writeFile('./codegen.yml', YAML.stringify(codegenConfig))
        let introspection = await getSdl(token)
        let schema = buildClientSchema(introspection)
        let pSchema = printSchema(schema)
        await fsPromises.writeFile('./graphql-sdl.graphql', pSchema)
        let generateTypes = spawn('npm', ['run', 'generate-types'])

        generateTypes.stdout.on('data', function (data) {
          console.log('stdout: ' + data.toString());
        });

        generateTypes.stderr.on('data', function (data) {
          console.log('stderr: ' + data.toString());
        });

        generateTypes.on('exit', function (code) {
          console.log(`child process exited with code ${code}`);
        });
      } else {
        const client = await stackConnect(this.deliveryAPIClient.Stack, config)

        if (client.types) {
          const result = await tsgenRunner(outputPath, client.types, prefix, includeDocumentation, graphql)
          this.log(`Wrote ${result.definitions} Content Types to '${result.outputPath}'.`)
        } else {
          this.log('No Content Types exist in the Stack.')
        }
      }

    } catch (error) {
      this.error(error, {exit: 1})
    }
  }

  generateCodegenConfig(path: string) {
    let config: any = { 
      'schema': './graphql-sdl.graphql',
      'generates': {}
    }
    config['generates'][path] = {plugins: ['typescript']}
    return config
  }
}
