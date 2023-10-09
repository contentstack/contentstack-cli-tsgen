export type Identifier = {
  uid: string;
};

export type Enum = {
  advanced: boolean;
  choices: Array<{ value: string }>;
};

export type FieldOptions = {
  display_name: string;
  data_type: string;
  mandatory: boolean;
  description: string;
  unique: boolean;
  multiple: boolean;
  non_localizable: boolean;
  max_instance: boolean | undefined;
} & Identifier;

export type Block = {
  title: string;
  schema: Schema;
  reference_to?: string;
} & Identifier;

export type GlobalField = {
  reference_to: string;
  schema: Schema;
  schema_type?: string;
  _version?: number
} & FieldOptions;

export type ReferenceField = {
  reference_to: string | string[];
} & FieldOptions;

export type GroupField = {
  schema: Schema;
} & FieldOptions;

export type EnumField = {
  enum: Enum;
} & FieldOptions;

export type BlockField = {
  blocks: Block[];
} & FieldOptions;

export type Field = GlobalField &
  ReferenceField &
  GroupField &
  EnumField &
  BlockField;
export type Schema = Array<Field>;

export type ContentType = {
  description: string;
  schema: Schema;
  _version: number;
  reference_to?: string;
  data_type?: string;
  schema_type?: string;
} & Identifier;
