import { exec } from "child_process"; // Import 'exec' to run shell commands
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
  it("should generate TypeScript types with the default flags", (done) => {
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}"`;

    exec(cmd, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(fs.existsSync(outputFilePath)).toBeTruthy();

      const generatedContent = fs.readFileSync(outputFilePath, "utf8");
      expect(generatedContent).toContain("interface"); // Verify that TypeScript interface is present in output

      // Assert that multi-line documentation comments are present
      expect(generatedContent).toMatch(/\/\*\*.*\*\/\n\s*(export)/); // Look for multi-line comment block

      done();
    });
  });

  // Test case 2: Generate TypeScript types with a prefix applied
  it("should generate TypeScript types with the prefix", (done) => {
    const prefix = "I"; // Define a prefix for interface names
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}" -p "${prefix}"`;

    exec(cmd, (error, stdout, stderr) => {
      expect(error).toBeNull();
      const generatedContent = fs.readFileSync(outputFilePath, "utf8");

      expect(generatedContent).toContain("interface"); // Check for interface presence

      // Check if all interfaces have the prefix
      const allInterfacesWithPrefix =
        generatedContent.match(/export interface \w+/g);
      if (allInterfacesWithPrefix) {
        allInterfacesWithPrefix.forEach((interfaceDecl) => {
          expect(
            interfaceDecl.startsWith(`export interface ${prefix}`)
          ).toBeTruthy(); // Ensure each interface starts with the prefix
        });
      }

      // Assert that multi-line documentation comments are present
      expect(generatedContent).toMatch(/\/\*\*.*\*\/\n\s*(export)/); // Look for multi-line comment block

      done();
    });
  });

  // Test case 3: Generate TypeScript types without documentation comments
  it("should generate TypeScript types without documentation", (done) => {
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}" --no-doc`; // Command with --no-doc flag

    exec(cmd, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(fs.existsSync(outputFilePath)).toBeTruthy();

      const generatedContent = fs.readFileSync(outputFilePath, "utf8");

      // Assert that no multi-line documentation comments are present
      expect(generatedContent).not.toMatch(/\/\*\*.*\*\/\n\s*(export)/); // Look for multi-line comment block
      done();
    });
  });

  // Test case 4: Generate TypeScript types with system fields
  it("should generate TypeScript types with the system fields", (done) => {
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}" --include-system-fields`;

    exec(cmd, (error) => {
      expect(error).toBeNull();
      expect(fs.existsSync(outputFilePath)).toBeTruthy();

      const generatedContent = fs.readFileSync(outputFilePath, "utf8");

      expect(generatedContent).toContain("export interface SystemFields");
      expect(generatedContent).toContain("extends SystemFields");

      // Optional : Assert specific fields are present in the SystemFields interface
      const systemFieldsPattern = /interface SystemFields\s*{([^}]*)}/; // Regex to find the SystemFields interface
      const match = generatedContent.match(systemFieldsPattern);
      expect(match).toBeTruthy(); // Ensure SystemFields interface exists
      if (match) {
        expect(match[1]).toContain("uid?: string;"); // Check specific fields in SystemFields
        expect(match[1]).toContain("created_at?: string;");
        expect(match[1]).toContain("updated_at?: string;");
        expect(match[1]).toContain("created_by?: string;");
        expect(match[1]).toContain("updated_by?: string;");
        expect(match[1]).toContain("_content_type_uid?: string;");
        expect(match[1]).toContain("tags?: string[];");
        expect(match[1]).toContain("ACL?: any[];");
        expect(match[1]).toContain("_version?: number;");
        expect(match[1]).toContain("_in_progress?: boolean;");
        expect(match[1]).toContain("locale?: string;");
        expect(match[1]).toContain("publish_details?: PublishDetails[];");
        expect(match[1]).toContain("title?: string;");
      }

      // Assert that multi-line documentation comments are present
      expect(generatedContent).toMatch(/\/\*\*.*\*\/\n\s*(export)/); // Look for multi-line comment block

      done();
    });
  });

  // Test case 5: Handling of invalid token alias
  it("should fail with an invalid token alias", (done) => {
    const cmd = `csdx tsgen -a "invalid_alias" -o "${outputFilePath}"`; // Command with incorrect token alias

    exec(cmd, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain("Error: No token found"); // Check error message
      done();
    });
  });

  // Test case 6: Generate TypeScript types for GraphQL API
  it("should generate correct TypeScript for basic GraphQL response", (done) => {
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}" --api-type graphql`;

    exec(cmd, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(fs.existsSync(outputFilePath)).toBeTruthy();

      const generatedContent = fs.readFileSync(outputFilePath, "utf-8");

      expect(generatedContent).toContain("interface IGraphQLResponseRoot");
      expect(generatedContent).toContain("interface IGraphQLResponseError");
      expect(generatedContent).toContain(
        "interface IGraphQLResponseErrorLocation"
      );
      expect(generatedContent).toContain("interface IQuery");
      done();
    });
  });

  // Test case 7: Generate TypeScript types for GraphQL API with a custom namespace
  it("should generate correct TypeScript for GraphQL API with a custom namespace", (done) => {
    const namespace = "GraphQL"; // Define a custom namespace
    const cmd = `csdx tsgen -a "${tokenAlias}" -o "${outputFilePath}" --api-type graphql --namespace "${namespace}"`;

    exec(cmd, (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(fs.existsSync(outputFilePath)).toBeTruthy();

      const generatedContent = fs.readFileSync(outputFilePath, "utf-8");

      expect(generatedContent).toContain(`declare namespace ${namespace}`);
      expect(generatedContent).toContain("interface IGraphQLResponseRoot");
      expect(generatedContent).toContain("interface IGraphQLResponseError");
      expect(generatedContent).toContain(
        "interface IGraphQLResponseErrorLocation"
      );
      expect(generatedContent).toContain("interface IQuery");
      done();
    });
  });

  // Test case 8: Handle errors for GraphQL API
  it("should fail with an invalid token alias for GraphQL API", (done) => {
    const cmd = `csdx tsgen -a "invalid_alias" -o "${outputFilePath}" --api-type graphql`;

    exec(cmd, (error, stdout, stderr) => {
      expect(error).not.toBeNull();
      expect(stderr).toContain("Error: No token found"); // Check error message
      done();
    });
  });

  afterEach(() => {
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
  });
});
