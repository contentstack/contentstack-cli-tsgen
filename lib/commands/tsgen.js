"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_command_1 = require("@contentstack/cli-command");
const client_1 = require("../lib/stack/client");
const runner_1 = require("../lib/tsgen/runner");
class TypeScriptCodeGeneratorCommand extends cli_command_1.Command {
    async run() {
        try {
            const { flags } = this.parse(TypeScriptCodeGeneratorCommand);
            const token = this.getToken(flags['token-alias']);
            const prefix = flags.prefix;
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
                region: this.region.name,
                environment: token.environment || '',
            };
            const client = await client_1.stackConnect(this.deliveryAPIClient.Stack, config);
            if (client.types) {
                const result = await runner_1.default(outputPath, client.types, prefix, includeDocumentation);
                this.log(`Wrote ${result.definitions} Content Types to '${result.outputPath}'.`);
            }
            else {
                this.log('No Content Types exist in the Stack.');
            }
        }
        catch (error) {
            this.error(error, { exit: 1 });
        }
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
};
