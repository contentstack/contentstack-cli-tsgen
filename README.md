[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![Node.js CI](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen/workflows/Node.js%20CI/badge.svg)

## Description
Generate TypeScript typings from Contentstack Content Types. Interfaces and fields are annotated with jsdoc comments.

## How to install this plugin

```shell
$ csdx plugins:install https://github.com/Contentstack-Solutions/contentstack-cli-tsgen
```

## `csdx tsgen`

Generate TypeScript typings from a Stack.

```
USAGE
  $ csdx tsgen

OPTIONS
  -a, --token-alias=token-alias  (required) Delivery Token Alias
  -o, --output=output            (required) Full path to output
  -p, --prefix=prefix            Interface prefix, e.g. "I"

EXAMPLES
  $ csdx tsgen -a "delivery-token-alias" -o "contentstack/generated.d.ts"
  $ csdx tsgen -p "I" -a "delivery-token-alias" -o "contentstack/generated.d.ts"
```

_See code: [src/commands/tsgen.ts](https://github.com/Contentstack-Solutions/contentstack-cli-tsgen/blob/v1.0.0/src/commands/tsgen.ts)_
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
  seo?: ISeo;
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
          /** Number */ number?: number;
          /** Single line textbox */
          single_line?: string;
        };
        block_2: undefined;
        seo_gf: undefined;
      }
    | {
        block_2: {
          /** Boolean */ boolean?: boolean;
          /** Date */
          date?: string;
        };
        block_1: undefined;
        seo_gf: undefined;
      }
    | {
        seo_gf: {
          /** Keywords */ keywords?: string;
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
  link?: ILink;
  /** File */
  file?: IFile;
  /** Boolean */
  boolean?: boolean;
  /** Date */
  date?: string;
}
```
