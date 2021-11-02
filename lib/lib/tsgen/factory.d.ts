import { DocumentationGenerator } from './docgen/doc';
import * as ContentstackTypes from '../stack/schema';
export declare type TSGenOptions = {
    docgen: DocumentationGenerator;
    naming?: {
        prefix: string;
    };
};
export declare type TSGenResult = {
    definition: string;
    metadata: {
        name: string;
        types: {
            javascript: Set<string>;
            contentstack: Set<string>;
            globalFields: Set<string>;
        };
        dependencies: {
            globalFields: GlobalFieldCache;
            contentTypes: Set<string>;
        };
    };
};
declare type GlobalFieldCache = {
    [prop: string]: {
        definition: string;
    };
};
export default function (userOptions: TSGenOptions): (contentType: ContentstackTypes.ContentType) => TSGenResult;
export {};
