const testData = require('./jsdoc.ct')

import JSDocumentationGenerator from '../../src/lib/tsgen/docgen/jsdoc'
import tsgenFactory from '../../src/lib/tsgen/factory'

const tsgen = tsgenFactory({
  docgen: new JSDocumentationGenerator(),
})

describe('jsdoc', () => {
  const result = tsgen(testData.jsdoc)

  test('definition', () => {
    expect(result.definition).toMatchInlineSnapshot(`
      "/** Content Type Description */
      export interface Jsdoc
      {
      /** Name */
      title: string;
      /** Age */
      current_age?: number;
      /** City */
      current_city?: string;
      /** State */
      current_state?: string;
      }"
    `)
  })
})
