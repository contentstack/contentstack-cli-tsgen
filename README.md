![Node.js CI](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen/workflows/Node.js%20CI/badge.svg)
![npm](https://img.shields.io/npm/v/contentstack-cli-tsgen)

## Description
Generate TypeScript typings from Contentstack Content Types. Interfaces and fields are annotated with JSDoc comments.

## How to install this plugin

```shell
$ csdx plugins:install contentstack-cli-tsgen
```

## `csdx tsgen`

generate TypeScript typings from a Stack

```
USAGE
  $ csdx tsgen

OPTIONS
  -a, --token-alias=token-alias  (required) Delivery token alias
  -d, --[no-]doc                 Include documentation comments
  -o, --output=output            (required) Full path to output
  -p, --prefix=prefix            Interface prefix, e.g. "I"

EXAMPLES
  $ csdx tsgen -a "delivery-token-alias" -o "contentstack/generated.d.ts"
  $ csdx tsgen -a "delivery-token-alias" -o "contentstack/generated.d.ts" -p "I"
  $ csdx tsgen -a "delivery-token-alias" -o "contentstack/generated.d.ts" --no-doc
```

_See code: [src/commands/tsgen.ts](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen/blob/v1.0.5/src/commands/tsgen.ts)_
<!-- commandsstop -->

## Supported Fields
* Number
* Text
* IsoDate
* Boolean
* Single Select w/ String and Number Types
* Multiple Select w/ String and Number Types
* Modular Block
* Global Field
* Group
* Link
* File
* References

## Supported Field Options
* Mandatory
* Multiple
* Multiple Max Limit
* Description (used in JSDoc comment)

## Example Output
```typescript
/** This is a description. */
interface BuiltinExample {
  /** Title */
  title: string;
  /** URL */
  url: string;
  /** Group1 */
  group1?: {
    /** Group2 */
    group2?: {
      /** Group3 */
      group3?: {
        /** Number */
        number?: number;
      };
    };
  };
  /** SEO */
  seo?: Seo;
  /** Single line textbox */
  single_line?: string;
  /** Multi line textbox */
  multi_line?: string;
  /** Rich text editor */
  rich_text_editor?: string;
  /** Multiple Single Line Textbox */
  multiple_single_line_textbox?: string[];
  /** Markdown */
  markdown?: string;
  /** Multiple Choice */
  multiple_choice?: ("Choice 1" | "Choice 2" | "Choice 3")[];
  /** Single Choice */
  single_choice: "Choice 1" | "Choice 2" | "Choice 3";
  /** Modular Blocks */
  modular_blocks?: (
    | {
        block_1: {
          /** Number */ 
          number?: number;
          /** Single line textbox */
          single_line?: string;
        };
        block_2: undefined;
        seo_gf: undefined;
      }
    | {
        block_2: {
          /** Boolean */ 
          boolean?: boolean;
          /** Date */
          date?: string;
        };
        block_1: undefined;
        seo_gf: undefined;
      }
    | {
        seo_gf: {
          /** Keywords */ 
          keywords?: string;
          /** Description */
          description?: string;
        };
        block_1: undefined;
        block_2: undefined;
      }
  )[];
  /** Number */
  number?: number;
  /** Link */
  link?: Link;
  /** File */
  file?: File;
  /** Boolean */
  boolean?: boolean;
  /** Date */
  date?: string;
}
```
