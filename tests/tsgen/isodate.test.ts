const testData = require("./isodate.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("builtin isodate field", () => {
  const result = tsgen(testData.builtinIsodate);

  /*
   * Isodates are returned as strings
   */
  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
    expect(types.javascript).toContain("string");
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface Isodate
      {
      /** Version */
      _version:  2 ;
      title: string  ;
      date?: string | null ;
      date_required: string  ;
      date_multiple?: string[] | null ;
      date_multiple_maxlength?: [string, string, string, string, string] | null ;
      date_required_multiple_maxlength: [string, string, string, string, string, string, string, string]  ;
      }"
    `);
  });
});
