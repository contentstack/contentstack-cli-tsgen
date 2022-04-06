export default function tsgenRunner(outputFile: string, contentTypes: any[], prefix: string | undefined, includeDocumentation: boolean | undefined, graphql: boolean): Promise<{
    definitions: number;
    outputPath: string;
}>;
