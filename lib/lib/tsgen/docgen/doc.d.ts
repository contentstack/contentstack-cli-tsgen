export interface DocumentationGenerator {
    interface: (description: string) => string | null;
    field: (description: string) => string | null;
}
