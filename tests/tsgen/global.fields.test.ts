const testData = require("./global.fields.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
  naming: {
    prefix: "I",
  },
});

describe("global fields", () => {
  const result = tsgen(testData.globalFields);

  test("metadata", () => {
    const types = result.metadata.types;

    expect([...types.globalFields]).toEqual(expect.arrayContaining(["ISeo"]));
  });

  test("global field definition", () => {
    const globalField = result.metadata.dependencies.globalFields.ISeo;
    expect(globalField.definition).toMatchInlineSnapshot(`
      "export interface ISeo
      {
      /** Version */
      version:   ;
      keywords?: string  ;
      description?: string  ;
      }"
    `);
  });

  test("content type definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface IGlobalFields
      {
      /** Version */
      version:  2 ;
      title: string  ;
      seo?: ISeo  ;
      }"
    `);
  });
});
