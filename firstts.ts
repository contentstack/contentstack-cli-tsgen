export interface File {
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
}

export interface Link {
  title: string;
  href: string;
}

export interface Newglobalfield {
  /** Version */
  version: 1;
  /** Single Line Textbox */
  single_line?: string;
}

export interface Fdsf {
  /** Version */
  version: 3;
  /** Rich Text Editor */
  rich_text_editor?: string;
  /** JSON Rich Text Editor */
  json_rte?: any;
  /** Markdown */
  markdown?: string;
}

export interface C3 {
  /** Version */
  version: 2;
  /** Title */
  title: string;
}

export interface C2 {
  /** Version */
  version: 3;
  /** Title */
  title: string;
  /** Reference */
  reference?: C3[];
}

/** This is contentType for testing */
export interface C1 {
  /** Version */
  version: 6;
  /** Title */
  title: string;
  /** NumFeild */
  numfeild: number;
  /** BoolField */
  boolfield?: boolean;
  /** Date1 */
  date1?: string;
  /** FileFeild */
  filefeild?: File;
  /** SelectSingle */
  selectsingle?: "a" | "b";
  /** SelectMultiple */
  selectmultiple?: ("A:a" | "B:b" | "C:c" | "D:d")[];
  /** Modular Blocks Feild */
  modular_blocks_feild?: (
    | {
        newblock1: {
          /** Single Line Textbox */ single_line?: string;
        };
        newblock2: undefined;
      }
    | {
        newblock2: {
          /** Single Line Textbox */ single_line?: string;
        };
        newblock1: undefined;
      }
  )[];
  /** Rich Text Editor Feild */
  rich_text_editor_feild?: string;
  /** JSON Rich Text Editor Field  */
  json_rich_text_editor_field?: any;
  /** File */
  file: File[];
  /** Reference */
  reference?: (C3 | C2 | C1)[];
}
