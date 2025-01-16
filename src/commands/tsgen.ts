import { Command } from "@contentstack/cli-command";
import { flags } from "@contentstack/cli-utilities";
import * as path from "path";
import * as fs from "fs";
import { sanitizePath } from "../lib/helper";
import { generateTS, graphqlTS } from "@contentstack/types-generator";
import { StackConnectionConfig } from "../types";

function createOutputPath(outputFile: string) {
  const outputPath = path.resolve(
    sanitizePath(process.cwd()),
    sanitizePath(outputFile),
  );
  const dirName = path.dirname(outputPath);

  fs.mkdirSync(dirName, { recursive: true });

  return outputPath;
}

export default class TypeScriptCodeGeneratorCommand extends Command {
  static description = "Generate TypeScript typings from a Stack";

  static examples = [
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" -p "I"',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --no-doc',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql --namespace "GraphQL" ',
  ];

  static flags: any = {
    "token-alias": flags.string({
      char: "a",
      description: "delivery token alias",
      hidden: false,
      multiple: false,
      required: true,
    }),

    output: flags.string({
      char: "o",
      description: "full path to output",
      hidden: false,
      multiple: false,
      required: true,
    }),

    prefix: flags.string({
      char: "p",
      description: 'interface prefix, e.g. "I"',
      hidden: false,
      multiple: false,
      default: "",
      required: false,
    }),

    doc: flags.boolean({
      char: "d",
      description: "include documentation comments",
      default: true,
      allowNo: true,
    }),

    branch: flags.string({
      description: "branch",
      hidden: false,
      multiple: false,
    }),

    "include-system-fields": flags.boolean({
      description: "include system fields in generated types",
      default: false,
    }),

    "api-type": flags.string({
      default: "rest",
      multiple: false,
      options: ["rest", "graphql"],
      description:
        "[Optional] Please enter an API type to generate the type definitions.",
    }),

    namespace: flags.string({
      description:
        "[Optional]Please enter a namespace for the GraphQL API type to organize the generated types.",
    }),
  };

  async run() {
    try {
      const { flags } = await this.parse(TypeScriptCodeGeneratorCommand);

      const token = this.getToken(flags["token-alias"]);
      const prefix = flags.prefix;
      const includeDocumentation = flags.doc;
      const filePath = flags.output;
      const branch = flags.branch;
      const includeSystemFields = flags["include-system-fields"];
      const namespace = flags.namespace;

      const outputPath = createOutputPath(filePath);

      if (token.type !== "delivery") {
        this.warn(
          "Possibly using a management token. You may not be able to connect to your Stack. Please use a delivery token.",
        );
      }

      if (!outputPath || !outputPath.trim()) {
        this.error("Please provide an output path.", { exit: 2 });
      }

      const config: StackConnectionConfig = {
        apiKey: token.apiKey,
        token: token.token,
        region:
          this.region.name === "NA" ? "us" : this.region.name.toLowerCase(),
        environment: token.environment || "",
        branch: branch || undefined,
        host: this.cdaHost,
      };

      // Generate the GraphQL schema TypeScript definitions
      if (flags["api-type"] === "graphql") {
        try {
          const result = await graphqlTS({ ...config, namespace: namespace });

          fs.writeFileSync(outputPath, result);
          this.log(
            `Successfully added the GraphQL schema type definitions to '${outputPath}'.`,
          );
        } catch (error: any) {
          this.error(error.error_message, { exit: 1 });
        }
      } else {
        // Generate the Content Types TypeScript definitions
        try {
          const result = await generateTS({
            ...config,
            tokenType: "delivery",
            includeDocumentation: includeDocumentation,
            prefix,
            systemFields: includeSystemFields,
          });

          fs.writeFileSync(outputPath, result);

          // -- TODO : Add count support for the number of Content Types generated
          this.log(`Successfully added the Content Types to '${outputPath}'.`);

          // this.log(`Wrote ${outputPath} Content Types to '${result.outputPath}'.`)
        } catch (error: any) {
          this.error(error.error_message, { exit: 1 });
        }
      }
    } catch (error: any) {
      this.error(error as any, { exit: 1 });
    }
  }
}
