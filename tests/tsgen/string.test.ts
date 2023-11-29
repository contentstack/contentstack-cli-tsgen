const testData = require("./string.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("builtin string fields", () => {
  const result = tsgen(testData.builtinStrings);

  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
    expect(types.javascript).toContain("string");
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface BuiltinStrings
      {
      /** Version */
      version:  4 ;
      title: string  ;
      single_line?: string | null ;
      multi_line?: string | null ;
      rich_text_editor?: string | null ;
      markdown?: string | null ;
      }"
    `);
  });
});
