## Migrating from v2 to v3
This migration document details the changes needed to separate nested modular blocks into distinct interfaces. This update will impact how modular blocks are represented and utilized throughout the codebase.

## Before 
```typescript
export interface Test {
  /** Version */
  _version?: 2;
  /** Title */
  title: string;
  /** Modular Blocks */
  modular_blocks?: {
    test: {
      /** Multi Line Textbox */
      multi_line?: string;
      /** Rich Text Editor */
      rich_text_editor?: string;
      /** Modular Blocks1 */
      modular_blocks1?: {
        test1: {
          /** Multi Line Textbox */
          multi_line?: string;
        };
      }[];
    };
  }[];
}
```


## After
```typescript
export interface Test {
  /** Version */
  _version: 2;
  /** Title */
  title: string;
  /** Modular Blocks */
  modular_blocks?: ModularBlocks[];
}


export interface ModularBlocks {
  /** Multi Line Textbox */
  multi_line?: string;
  /** Rich Text Editor */
  rich_text_editor?: string;
  /** Modular Blocks1 */
  modular_blocks1?: ModularBlocks1[];
}

export interface ModularBlocks1 {
  /** Multi Line Textbox */
  multi_line?: string;
}
```