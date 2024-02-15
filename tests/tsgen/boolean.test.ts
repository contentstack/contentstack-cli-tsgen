const testData = require("./boolean.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
  naming: {
    prefix: "I",
  },
});

describe("builtin boolean field", () => {
  const result = tsgen(testData.builtinBoolean);

  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
    expect(types.javascript).toContain("boolean");
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface IBoolean
      {
      /** Version */
      _version:  2 ;
      title: string  ;
      boolean?: boolean  ;
      }"
    `);
  });
});
