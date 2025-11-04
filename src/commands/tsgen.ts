import { Command } from "@contentstack/cli-command";
import { flags, FlagInput, log } from "@contentstack/cli-utilities";
import * as path from "path";
import * as fs from "fs";
import { cliux } from "@contentstack/cli-utilities";
import { generateTS, graphqlTS } from "@contentstack/types-generator";
import { sanitizePath, printFormattedError } from "../lib/helper";
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
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --include-referenced-entry',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql',
    '$ csdx tsgen -a "delivery token alias" -o "contentstack/generated.d.ts" --api-type graphql --namespace "GraphQL" ',
  ];

  // Check if a region is a default Contentstack region
  private isDefaultRegion(region: string): boolean {
    const defaultRegions = [
      "US",
      "EU",
      "AU",
      "AZURE_NA",
      "AZURE_EU",
      "GCP_NA",
      "GCP_EU",
    ];
    return defaultRegions.includes(region.toUpperCase());
  }

  static flags: FlagInput = {
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

    "include-editable-tags": flags.boolean({
      description: "include editable tags in generated types",
      default: false,
    }),

    "include-referenced-entry": flags.boolean({
      description:
        "Includes the ReferencedEntry interface in generated types. Use this option to add a generic interface for handling referenced entries when the exact content type is unknown or when you need a flexible reference type",
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
      const includeEditableTags = flags["include-editable-tags"];
      const includeReferencedEntry = flags["include-referenced-entry"];
      const namespace = flags.namespace;

      const outputPath = createOutputPath(filePath);

      if (token.type !== "delivery") {
        this.warn(
          "You might be using a management token. Connection may fail. Use a delivery token instead.",
        );
      }

      if (!outputPath || !outputPath.trim()) {
        this.error("Output path is required.", { exit: 2 });
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
          if (config.region === "us") {
            config.region = "US";
          }

          // Check if token has delivery type (required for GraphQL)
          if (token.type !== "delivery") {
            throw new Error(
              "GraphQL API requires a delivery token. Management tokens aren't supported.",
            );
          }

          // Prepare GraphQL config - only include host for custom regions
          const graphqlConfig: any = {
            apiKey: config.apiKey,
            token: config.token,
            environment: config.environment,
            namespace: namespace,
            logger: log,
          };

          // Add region or host based on whether it's a custom region
          if (config.host && !this.isDefaultRegion(config.region)) {
            // Custom region - include both region and host
            graphqlConfig.region = config.region;
            graphqlConfig.host = config.host;
          } else {
            // Default region - only include region
            graphqlConfig.region = config.region;
          }

          const result = await graphqlTS(graphqlConfig);

          if (!result) {
            throw new Error("No result returned by the GraphQL API.");
          }

          fs.writeFileSync(outputPath, result);
          this.log(
            `Successfully added the GraphQL schema type definitions to '${outputPath}'.`,
          );
        } catch (error: any) {
          printFormattedError(error, error?.context || "graphql");
          process.exit(1);
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
            isEditableTags: includeEditableTags,
            includeReferencedEntry,
            logger: log,
          });

          fs.writeFileSync(outputPath, result || "");

          // Check if we have any skipped content types and show summary
          if (
            result &&
            typeof result === "string" &&
            result.includes(
              "Generation completed successfully with partial schema",
            )
          ) {
            cliux.print("");
            log.success("Type generation completed successfully with partial schema!");
            log.warn(
              "Some content types were skipped due to validation issues, but types were generated for valid content types."
            );
            log.info(
              "Check the output above for details on what was skipped and suggestions for fixing issues."
            );
          } else {
            log.success(`Successfully added the Content Types to '${outputPath}'.`);
          }

          // this.log(`Wrote ${outputPath} Content Types to '${result.outputPath}'.`)
        } catch (error: any) {
          printFormattedError(error, error?.context || "tsgen");
          process.exit(1);
        }
      }
    } catch (error: any) {
      printFormattedError(error, error?.context || "tsgen");
      process.exit(1);
    }
  }
}
