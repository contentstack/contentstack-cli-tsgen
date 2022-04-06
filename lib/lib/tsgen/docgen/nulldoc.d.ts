import { DocumentationGenerator } from './doc';
export default class NullDocumentationGenerator implements DocumentationGenerator {
    interface(__description: string): null;
    field(__description: string): null;
}
