import * as fs from 'fs'
import * as path from 'path'
import * as prettier from 'prettier'

import { defaultInterfaces } from '../stack/builtins'
import { DocumentationGenerator } from './docgen/doc'
import JSDocumentationGenerator from './docgen/jsdoc'
import NullDocumentationGenerator from './docgen/nulldoc'
import tsgenFactory from './factory'
import { sanitizePath } from '../helper'

async function format(definition: string) {
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formatted = await prettier.format(definition, {
    ...prettierConfig,
    parser: 'typescript',
  })
  return formatted
}

function createOutputPath(outputFile: string) {
  const outputPath = path.resolve(sanitizePath(process.cwd()), sanitizePath(outputFile))
  const dirName = path.dirname(outputPath)

  fs.mkdirSync(dirName, { recursive: true })

  return outputPath
}

export default async function tsgenRunner(outputFile: string, contentTypes: any[], prefix = '', includeDocumentation = true, systemFields = false) {
  const docgen: DocumentationGenerator = includeDocumentation ? new JSDocumentationGenerator() : new NullDocumentationGenerator()

  const outputPath = createOutputPath(outputFile)
  const globalFields = new Set()
  const definitions = []

  const tsgen = tsgenFactory({
    docgen,
    naming: {
      prefix,
    },
    systemFields
  })

  for (const contentType of contentTypes) {
    const tsgenResult = tsgen(contentType)

    if (tsgenResult.isGlobalField) {
      globalFields.add(tsgenResult.definition)
    } else {
      definitions.push(tsgenResult.definition)

      tsgenResult.metadata.types.globalFields.forEach((field: string) => {
        globalFields.add(tsgenResult.metadata.dependencies.globalFields[field].definition)
      })
    }
  }

  const output = await format(
    [
      defaultInterfaces(prefix, systemFields).join('\n\n'),
      [...globalFields].join('\n\n'),
      definitions.join('\n\n'),
    ].join('\n\n')
  )

  fs.writeFileSync(outputPath, output)

  return {
    definitions: definitions.length,
    outputPath,
  }
}
