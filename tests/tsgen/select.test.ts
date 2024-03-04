const testData = require("./select.ct");

import NullDocumentationGenerator from "../../src/lib/tsgen/docgen/nulldoc";
import tsgenFactory from "../../src/lib/tsgen/factory";

const tsgen = tsgenFactory({
  docgen: new NullDocumentationGenerator(),
});

describe("select (dropdown)", () => {
  const result = tsgen(testData.select);

  test("metadata", () => {
    const types = result.metadata.types;
    expect([...types.contentstack]).toHaveLength(0);
    expect([...types.globalFields]).toHaveLength(0);
  });

  test("definition", () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "export interface Select
      {
      /** Version */
      _version:  5 ;
      title: string  ;
      select_single_value?: (\\"Option 1\\" | \\"Option 2\\" | \\"Option 3\\") | null ;
      select_single_value_required: (\\"Test 1\\" | \\"Test 2\\" | \\"Test 3\\")  ;
      select_single_value_with_quotes?: (\\"\\\\\\"ABC\\\\\\"\\" | \\"A'B'C\\" | \\"\`A\`B\`C\\") | null ;
      select_multi_value?: (\\"Multi 1\\" | \\"Multi 2\\" | \\"Multi 3\\")[] | null ;
      select_multi_value_required: (\\"Multi Req 1\\" | \\"Multi Req 2\\" | \\"Multi Req 3\\")[]  ;
      select_number_values?: (1 | 2 | 3 | 4) | null ;
      }"
    `);
  });
});
