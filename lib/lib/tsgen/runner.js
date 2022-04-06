"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const builtins_1 = require("../stack/builtins");
const jsdoc_1 = require("./docgen/jsdoc");
const nulldoc_1 = require("./docgen/nulldoc");
const factory_1 = require("./factory");
async function format(definition) {
    const prettierConfig = await prettier.resolveConfig(process.cwd());
    const formatted = await prettier.format(definition, Object.assign(Object.assign({}, prettierConfig), { parser: 'typescript' }));
    return formatted;
}
function createOutputPath(outputFile) {
    const outputPath = path.resolve(process.cwd(), outputFile);
    const dirName = path.dirname(outputPath);
    fs.mkdirSync(dirName, { recursive: true });
    return outputPath;
}
async function tsgenRunner(outputFile, contentTypes, prefix = '', includeDocumentation = true, graphql) {
    const docgen = includeDocumentation ? new jsdoc_1.default() : new nulldoc_1.default();
    const outputPath = createOutputPath(outputFile);
    const globalFields = new Set();
    const definitions = [];
    const tsgen = (0, factory_1.default)({
        docgen,
        naming: {
            prefix,
        },
    });
    for (let contentType of contentTypes) {
        const tsgenResult = tsgen(contentType);
        definitions.push(tsgenResult.definition);
        tsgenResult.metadata.types.globalFields.forEach((field) => {
            globalFields.add(tsgenResult.metadata.dependencies.globalFields[field].definition);
        });
    }
    const output = await format([
        (0, builtins_1.defaultInterfaces)(prefix).join('\n\n'),
        [...globalFields].join('\n\n'),
        definitions.join('\n\n'),
    ].join('\n\n'));
    fs.writeFileSync(outputPath, output);
    return {
        definitions: definitions.length,
        outputPath,
    };
}
exports.default = tsgenRunner;
