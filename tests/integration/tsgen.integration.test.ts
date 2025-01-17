const { spawnSync } = require("child_process");
import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const outputFilePath = path.resolve(__dirname, "generated.d.ts"); // Define the path to store the generated TypeScript file
const tokenAlias = process.env.TOKEN_ALIAS;

describe("Integration Test for tsgen command", () => {
  beforeEach(() => {
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
  });

  // Test case 1: Generate TypeScript types with default flags
  it("should generate TypeScript types with the default flags", () => {
    const cmd = "csdx";
    const args = ["tsgen", "-a", tokenAlias, "-o", outputFilePath];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0); // Command should exit successfully
    expect(fs.existsSync(outputFilePath)).toBeTruthy();

    const generatedContent = fs.readFileSync(outputFilePath, "utf8");
    expect(generatedContent).toContain("interface"); // Verify TypeScript interface presence
    expect(generatedContent).toMatch(/\/\*\*[\s\S]*?\*\/[\s\S]*?export/); // Multi-line comment block check
  });

  // Test case 2: Generate TypeScript types with a prefix applied
  it("should generate TypeScript types with the prefix", () => {
    const prefix = "I";
    const cmd = "csdx";
    const args = [
      "tsgen",
      "-a",
      tokenAlias,
      "-o",
      outputFilePath,
      "-p",
      prefix,
    ];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0);
    const generatedContent = fs.readFileSync(outputFilePath, "utf8");

    expect(generatedContent).toContain("interface");
    const allInterfacesWithPrefix =
      generatedContent.match(/export interface \w+/g);
    if (allInterfacesWithPrefix) {
      allInterfacesWithPrefix.forEach((interfaceDecl) => {
        expect(
          interfaceDecl.startsWith(`export interface ${prefix}`),
        ).toBeTruthy();
      });
    }

    expect(generatedContent).toMatch(/\/\*\*[\s\S]*?\*\/[\s\S]*?export/); // Multi-line comment block check
  });

  // Test case 3: Generate TypeScript types without documentation comments
  it("should generate TypeScript types without documentation", () => {
    const cmd = "csdx";
    const args = ["tsgen", "-a", tokenAlias, "-o", outputFilePath, "--no-doc"];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0);
    expect(fs.existsSync(outputFilePath)).toBeTruthy();

    const generatedContent = fs.readFileSync(outputFilePath, "utf8");
    expect(generatedContent).not.toMatch(/\/\*\*.*\*\/\n\s*(export)/); // Ensure no multi-line comments
  });

  // Test case 4: Generate TypeScript types with system fields
  it("should generate TypeScript types with the system fields", () => {
    const cmd = "csdx";
    const args = [
      "tsgen",
      "-a",
      tokenAlias,
      "-o",
      outputFilePath,
      "--include-system-fields",
    ];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0);
    expect(fs.existsSync(outputFilePath)).toBeTruthy();

    const generatedContent = fs.readFileSync(outputFilePath, "utf8");
    expect(generatedContent).toContain("export interface SystemFields");
    expect(generatedContent).toContain("extends SystemFields");
  });

  // Test case 5: Handling of invalid token alias
  it("should fail with an invalid token alias", () => {
    const cmd = "csdx";
    const args = ["tsgen", "-a", "invalid_alias", "-o", outputFilePath];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).not.toBe(0); // Command should fail
    expect(result.stderr).toContain("Error: No token found"); // Check error message
  });

  // Test case 6: Generate TypeScript types for GraphQL API
  it("should generate correct TypeScript for basic GraphQL response", () => {
    const cmd = "csdx";
    const args = [
      "tsgen",
      "-a",
      tokenAlias,
      "-o",
      outputFilePath,
      "--api-type",
      "graphql",
    ];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0);
    expect(fs.existsSync(outputFilePath)).toBeTruthy();

    const generatedContent = fs.readFileSync(outputFilePath, "utf-8");
    expect(generatedContent).toContain("interface IGraphQLResponseRoot");
    expect(generatedContent).toContain("interface IGraphQLResponseError");
  });

  // Test case 7: Generate TypeScript types for GraphQL API with a custom namespace
  it("should generate correct TypeScript for GraphQL API with a custom namespace", () => {
    const namespace = "GraphQL";
    const cmd = "csdx";
    const args = [
      "tsgen",
      "-a",
      tokenAlias,
      "-o",
      outputFilePath,
      "--api-type",
      "graphql",
      "--namespace",
      namespace,
    ];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).toBe(0);
    expect(fs.existsSync(outputFilePath)).toBeTruthy();

    const generatedContent = fs.readFileSync(outputFilePath, "utf-8");
    expect(generatedContent).toContain(`declare namespace ${namespace}`);
  });

  // Test case 8: Handle errors for GraphQL API
  it("should fail with an invalid token alias for GraphQL API", () => {
    const cmd = "csdx";
    const args = [
      "tsgen",
      "-a",
      "invalid_alias",
      "-o",
      outputFilePath,
      "--api-type",
      "graphql",
    ];

    const result = spawnSync(cmd, args, { encoding: "utf-8" });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("Error: No token found"); // Check error message
  });

  afterEach(() => {
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
  });
});
