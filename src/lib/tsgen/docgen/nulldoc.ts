import {DocumentationGenerator} from './doc'

export default class NullDocumentationGenerator implements DocumentationGenerator {
  interface(__description: string) {
    return null
  }

  field(__description: string) {
    return null
  }
}
