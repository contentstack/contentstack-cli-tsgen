import { Command } from "@contentstack/cli-command";
import { flags, FlagInput } from "@contentstack/cli-utilities";
import * as path from "path";
import * as fs from "fs";
import { cliux } from "@contentstack/cli-utilities";
import { generateTS, graphqlTS } from "@contentstack/types-generator";
import { sanitizePath } from "../lib/helper";
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
          if (config.region === "us") {
            config.region = "US";
          }

          // Check if token has delivery type (required for GraphQL)
          if (token.type !== "delivery") {
            throw new Error(
              "GraphQL API requires a delivery token. Management tokens are not supported for GraphQL operations.",
            );
          }

          // Prepare GraphQL config - only include host for custom regions
          const graphqlConfig: any = {
            apiKey: config.apiKey,
            token: config.token,
            environment: config.environment,
            namespace: namespace,
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
            throw new Error("GraphQL API returned no result");
          }

          fs.writeFileSync(outputPath, result);
          this.log(
            `Successfully added the GraphQL schema type definitions to '${outputPath}'.`,
          );
        } catch (error: any) {
          const errorCode = error?.error_code || "UNKNOWN_ERROR";
          let errorMessage = "An error occurred while generating GraphQL types";
          let hint = "";

          // If we have a new error format with error_code, use it for better messaging
          if (error?.error_code) {
            switch (errorCode) {
              case "AUTHENTICATION_FAILED":
                errorMessage = `Authentication failed`;
                hint = "Please check your API key, token, and region.";
                break;
              case "INVALID_CREDENTIALS":
                errorMessage = `Invalid credentials provided`;
                hint = "Please verify your API key, token, and region.";
                break;
              default:
                errorMessage =
                  error?.error_message || "An unexpected error occurred";
                hint = "Please check the error details and try again.";
            }
          } else {
            // Fallback to old error format
            errorMessage =
              error?.error_message ||
              error?.message ||
              "An error occurred while generating GraphQL types";
            hint = "Please check your API credentials and try again.";
          }
          cliux.print(`Type generation failed: ${errorMessage}`, {
            color: "red",
            bold: true,
          });
          if (hint) {
            cliux.print(`Hint: ${hint}`, { color: "yellow" });
          }
          cliux.print(`Error context: ${error?.context || "graphql"}`, {
            color: "cyan",
          });
          cliux.print(
            `Timestamp: ${error?.timestamp || new Date().toISOString()}`,
            { color: "gray" },
          );

          if (error?.error_message && error.error_message !== errorMessage) {
            cliux.print("", {});
            cliux.print("Raw error details:", { color: "magenta", bold: true });
            cliux.print(error.error_message, { color: "red" });
          }
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
            cliux.print("", {});
            cliux.print(
              "Type generation completed successfully with partial schema!",
              { color: "green", bold: true },
            );
            cliux.print(
              "Some content types were skipped due to validation issues, but types were generated for valid content types.",
              { color: "yellow" },
            );
            cliux.print(
              "Check the output above for details on what was skipped and suggestions for fixing issues.",
              { color: "cyan" },
            );
          } else {
            cliux.print(
              `Successfully added the Content Types to '${outputPath}'.`,
              { color: "green" },
            );
          }

          // this.log(`Wrote ${outputPath} Content Types to '${result.outputPath}'.`)
        } catch (error: any) {
          const errorCode = error?.error_code || "UNKNOWN_ERROR";
          let errorMessage =
            "An error occurred while generating TypeScript types";
          let hint = "";

          // If we have a new error format with error_code, use it for better messaging
          if (error?.error_code) {
            switch (errorCode) {
              case "INVALID_INTERFACE_NAME":
              case "INVALID_CONTENT_TYPE_UID":
                errorMessage = `TypeScript syntax error detected in generated types`;
                hint = `Content type "${error?.details?.uid || "unknown"}" starts with a number, which creates invalid TypeScript interface names. Since UIDs cannot be changed, use the --prefix flag to add a valid prefix to all interface names (e.g., --prefix "ContentType").`;
                break;
              case "INVALID_GLOBAL_FIELD_REFERENCE":
                errorMessage = `TypeScript syntax error detected in generated types`;
                hint = `Global field "${error?.details?.uid || "unknown"}" references content type "${error?.details?.reference_to || "unknown"}" which starts with a number. Since UIDs cannot be changed, use the --prefix flag to add a valid prefix to all interface names (e.g., --prefix "ContentType").`;
                break;
              case "VALIDATION_ERROR":
                errorMessage = `TypeScript syntax error detected in generated types`;
                hint =
                  error?.error_message ||
                  "Validation error occurred during type generation";
                break;
              case "TYPE_GENERATION_FAILED":
                errorMessage = `Type generation failed due to an internal error`;
                hint =
                  error?.error_message ||
                  "An unexpected error occurred during type generation";
                break;
              case "AUTHENTICATION_FAILED":
                errorMessage = `Authentication failed`;
                hint = "Please check your API key, token, and region.";
                break;
              case "INVALID_CREDENTIALS":
                errorMessage = `Invalid credentials provided`;
                hint = "Please verify your API key, token, and region.";
                break;
              default:
                errorMessage =
                  error?.error_message || "An unexpected error occurred";
                hint = "Please check the error details and try again.";
            }
          } else {
            // Fallback to old error format
            errorMessage =
              error?.error_message ||
              error?.message ||
              "An error occurred while generating TypeScript types";
            hint =
              "Since UIDs cannot be changed, use the --prefix flag to add a valid prefix to all interface names (e.g., --prefix 'ContentType').";
          }

          // Display our formatted error first
          cliux.print(`Type generation failed: ${errorMessage}`, {
            color: "red",
            bold: true,
          });
          if (hint) {
            cliux.print(`Hint: ${hint}`, { color: "yellow" });
          }
          cliux.print(`Error context: ${error?.context || "tsgen"}`, {
            color: "cyan",
          });
          cliux.print(
            `Timestamp: ${error?.timestamp || new Date().toISOString()}`,
            { color: "gray" },
          );
          process.exit(1);
        }
      }
    } catch (error: any) {
      // Handle both old and new error formats
      const errorCode = error?.error_code || "UNKNOWN_ERROR";
      let errorMessage = "An unexpected error occurred";
      let hint = "";

      // If we have a new error format with error_code, use it for better messaging
      if (error?.error_code) {
        switch (errorCode) {
          case "AUTHENTICATION_FAILED":
            errorMessage = `Authentication failed`;
            hint = "Please check your API key, token, and region.";
            break;
          case "INVALID_CREDENTIALS":
            errorMessage = `Invalid credentials provided`;
            hint = "Please verify your API key, token, and region.";
            break;
          case "INVALID_INTERFACE_NAME":
          case "INVALID_CONTENT_TYPE_UID":
          case "INVALID_GLOBAL_FIELD_REFERENCE":
            errorMessage = `TypeScript syntax error detected in generated types`;
            hint = error?.error_message || "A validation error occurred";
            if (error?.details?.suggestion) {
              hint += `. ${error.details.suggestion}`;
            }
            break;
          default:
            errorMessage =
              error?.error_message || "An unexpected error occurred";
            hint = "Please check the error details and try again.";
        }
      } else {
        // Fallback to old error format
        errorMessage =
          error?.error_message ||
          error?.message ||
          "An unexpected error occurred";
        hint = "Please check your configuration and try again.";
      }

      // Display our formatted error first
      cliux.print(`Type generation failed: ${errorMessage}`, {
        color: "red",
        bold: true,
      });
      if (hint) {
        cliux.print(`Hint: ${hint}`, { color: "yellow" });
      }
      cliux.print(`Error context: ${error?.context || "tsgen"}`, {
        color: "cyan",
      });
      cliux.print(
        `Timestamp: ${error?.timestamp || new Date().toISOString()}`,
        { color: "gray" },
      );

      // Show the raw error details from types-generator
      if (error?.error_message && error.error_message !== errorMessage) {
        cliux.print("", {});
        cliux.print("Raw error details:", { color: "magenta", bold: true });
        cliux.print(error.error_message, { color: "red" });
      }
      process.exit(1);
    }
  }
}
