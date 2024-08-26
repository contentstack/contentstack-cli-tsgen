const testData = require("./modular.blocks.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("modular blocks", () => {
  const result = tsgen(testData.modularBlocks);

  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface ModularBlocks {
      string_block: {
       single_line?: string  ;
      multi_line?: string  ;
      markdown?: string  ;
      rich_text_editor?: string  ; }
      string_block_with_options: {
       single_line_textbox_required: string  ;
      single_line_textbox_multiple?: string[]  ; }
      boolean_block: {
       boolean?: boolean  ; }
      }

      export interface ModularBlocks
      {
      /** Version */
      _version:  2 ;
      title: string  ;
      url: string  ;
      modular_blocks?: ModularBlocks[]  ;
      }"
    `);
  });
});
