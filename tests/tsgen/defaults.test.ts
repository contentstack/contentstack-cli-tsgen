const testData = require("./defaults.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
  naming: {
    prefix: "I",
  },
});

describe("default single content block", () => {
  const result = tsgen(testData.defaultSingleContentBlock);

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface IMetadataSingleContentBlock
      {
      /** Version */
      version:  2 ;
      title: string  ;
      }"
    `);
  });
});

describe("default single webpage", () => {
  const result = tsgen(testData.defaultSingleWebpage);

  test("types", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
    expect(types.javascript).toContain("string");
  });

  test("dependencies", () => {
    expect(result.metadata.dependencies.globalFields).toEqual({});
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface IMetadataSingleWebpage
      {
      /** Version */
      version:  2 ;
      title: string  ;
      url: string  ;
      }"
    `);
  });
});
