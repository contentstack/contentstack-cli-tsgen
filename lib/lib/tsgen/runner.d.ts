export default function tsgenRunner(outputFile: string, contentTypes: any[], prefix?: string, includeDocumentation?: boolean): Promise<{
    definitions: number;
    outputPath: string;
}>;
