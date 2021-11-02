import { DocumentationGenerator } from './doc';
export default class JSDocumentationGenerator implements DocumentationGenerator {
    interface(description: string): string | null;
    field(description: string): string | null;
    private block;
}
