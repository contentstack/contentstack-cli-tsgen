const testData = require("./group.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("group", () => {
  const result = tsgen(testData.group);

  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
    expect([...types.javascript]).toEqual(
      expect.arrayContaining(["string", "number", "boolean"])
    );
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface Group
      {
      /** Version */
      version:  3 ;
      title: string  ;
      multiple_group_max_limit?: [{
      number?: number | null ;
      }, {
      number?: number | null ;
      }, {
      number?: number | null ;
      }, {
      number?: number | null ;
      }, {
      number?: number | null ;
      }]  ;
      multiple_group?: {
      single_line?: string  ;
      }[]  ;
      parent_group?: {
      rich_text_editor?: string  ;
      multi_line?: string  ;
      single_line?: string  ;
      child_group?: {
      number?: number | null ;
      boolean?: boolean  ;
      date?: string | null ;
      }  ;
      }  ;
      }"
    `);
  });
});
