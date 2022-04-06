"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_command_1 = require("@contentstack/cli-command");
const client_1 = require("../lib/stack/client");
const runner_1 = require("../lib/tsgen/runner");
const graphql_1 = require("../lib/util/graphql");
const graphql_2 = require("graphql");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const YAML = require("yaml");
const path = require("path");
class TypeScriptCodeGeneratorCommand extends cli_command_1.Command {
    async run() {
        try {
            const { flags } = this.parse(TypeScriptCodeGeneratorCommand);
            const token = this.getToken(flags['token-alias']);
            const prefix = flags.prefix;
            const graphql = flags.graphql;
            const includeDocumentation = flags.doc;
            const outputPath = flags.output;
            if (token.type !== 'delivery') {
                this.warn('Possibly using a management token. You may not be able to connect to your Stack. Please use a delivery token.');
            }
            if (!outputPath || !outputPath.trim()) {
                this.error('Please provide an output path.', { exit: 2 });
            }
            const config = {
                apiKey: token.apiKey,
                token: token.token,
                region: (this.region.name === 'EU') ? 'EU' : null,
                environment: token.environment || '',
            };
            if (flags.graphql) {
                let codegenConfig = this.generateCodegenConfig(outputPath);
                await fs_1.promises.writeFile(path.resolve(__dirname, './codegen.yml'), YAML.stringify(codegenConfig));
                let introspection = await (0, graphql_1.default)(token);
                let schema = (0, graphql_2.buildClientSchema)(introspection);
                let pSchema = (0, graphql_2.printSchema)(schema);
                await fs_1.promises.writeFile(path.resolve(__dirname, './graphql-sdl.graphql'), pSchema);
                let generateTypes = (0, child_process_1.spawn)('node', [
                    path.resolve(__dirname, '../../node_modules/.bin/graphql-codegen'),
                    '-c',
                    path.resolve(__dirname, './codegen.yml')
                ]);
                generateTypes.stdout.on('data', function (data) {
                    console.log('stdout: ' + data.toString());
                });
                generateTypes.stderr.on('data', function (data) {
                    console.log('stderr: ' + data.toString());
                });
                generateTypes.on('exit', function (code) {
                    console.log(`child process exited with code ${code}`);
                });
            }
            else {
                const client = await (0, client_1.stackConnect)(this.deliveryAPIClient.Stack, config);
                if (client.types) {
                    const result = await (0, runner_1.default)(outputPath, client.types, prefix, includeDocumentation, graphql);
                    this.log(`Wrote ${result.definitions} Content Types to '${result.outputPath}'.`);
                }
                else {
                    this.log('No Content Types exist in the Stack.');
                }
            }
        }
        catch (error) {
            this.error(error, { exit: 1 });
        }
    }
    generateCodegenConfig(outPath) {
        let config = {
            'schema': path.resolve(__dirname, './graphql-sdl.graphql'),
            'generates': {}
        };
        config['generates'][outPath] = { plugins: ['typescript'] };
        return config;
    }
}
exports.default = TypeScriptCodeGeneratorCommand;
TypeScriptCodeGeneratorCommand.description = 'generate TypeScript typings from a Stack';
TypeScriptCodeGeneratorCommand.examples = [
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" -p "I"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --no-doc',
];
TypeScriptCodeGeneratorCommand.flags = {
    'token-alias': cli_command_1.flags.string({
        char: 'a',
        description: 'delivery token alias',
        hidden: false,
        multiple: false,
        required: true,
    }),
    output: cli_command_1.flags.string({
        char: 'o',
        description: 'full path to output',
        hidden: false,
        multiple: false,
        required: true,
    }),
    prefix: cli_command_1.flags.string({
        char: 'p',
        description: 'interface prefix, e.g. "I"',
        hidden: false,
        multiple: false,
        default: '',
        required: false,
    }),
    doc: cli_command_1.flags.boolean({
        char: 'd',
        description: 'include documentation comments',
        default: true,
        allowNo: true,
    }),
    graphql: cli_command_1.flags.boolean({
        description: 'support graphql schema',
        default: false,
    }),
};
