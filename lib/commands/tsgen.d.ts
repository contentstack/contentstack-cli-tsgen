import { Command, flags } from '@contentstack/cli-command';
export default class TypeScriptCodeGeneratorCommand extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        'token-alias': flags.IOptionFlag<string>;
        output: flags.IOptionFlag<string>;
        prefix: flags.IOptionFlag<string>;
        doc: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
