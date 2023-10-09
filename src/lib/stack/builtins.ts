// File and Link fields are additional, non-scalar, data types within a stack.
export const defaultInterfaces = (prefix = '', systemFields: boolean = false) => {
    const defaultInterfaces = [
        `export interface ${prefix}PublishDetails {
            environment: string;
            locale: string;
            time: string;
            user: string;
        }`,
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
              publish_details: ${prefix}PublishDetails;
          }`,
        `export interface ${prefix}Link { 
              title: string;
              href: string;
          }`
      ]
    if (systemFields) {
        defaultInterfaces.push(
            `export interface ${prefix}SystemFields {
            uid?: string;
            created_at?: string;
            updated_at?: string;
            created_by?: string;
            updated_by?: string;
            _content_type_uid?: string;
            tags?: string[];
            ACL?: any[];
            _version?: number;
            _in_progress?: boolean;
            locale?: string;
            publish_details?: ${prefix}PublishDetails[];
            title?: string;
        }`)
    }
    return defaultInterfaces;
}
