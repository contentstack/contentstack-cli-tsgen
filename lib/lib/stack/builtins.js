"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultInterfaces = void 0;
// File and Link fields are additional, non-scalar, data types within a stack.
const defaultInterfaces = (prefix = '') => [
    `export interface ${prefix}File { 
        uid: string;
        created_at: string;
        updated_at: string;
        created_by: string;
        updated_by: string;
        content_type: string;
        file_size: string;
        tags: string[];
        filename: string;
        url: string;
        ACL: any[];
        is_dir: boolean;
        parent_uid: string;
        _version: number;
        title: string;
        publish_details: {
            environment: string;
            locale: string;
            time: string;
            user: string;
        };
    }`,
    `export interface ${prefix}Link { 
        title: string;
        href: string;
    }`,
];
exports.defaultInterfaces = defaultInterfaces;
