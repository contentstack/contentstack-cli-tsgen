export declare type Identifier = {
    uid: string;
};
export declare type Enum = {
    advanced: boolean;
    choices: Array<{
        value: string;
    }>;
};
export declare type FieldOptions = {
    display_name: string;
    data_type: string;
    mandatory: boolean;
    description: string;
    unique: boolean;
    multiple: boolean;
    non_localizable: boolean;
    max_instance: boolean | undefined;
} & Identifier;
export declare type Block = {
    title: string;
    schema: Schema;
} & Identifier;
export declare type GlobalField = {
    reference_to: string;
    schema: Schema;
} & FieldOptions;
export declare type ReferenceField = {
    reference_to: string | string[];
} & FieldOptions;
export declare type GroupField = {
    schema: Schema;
} & FieldOptions;
export declare type EnumField = {
    enum: Enum;
} & FieldOptions;
export declare type BlockField = {
    blocks: Block[];
} & FieldOptions;
export declare type Field = GlobalField & ReferenceField & GroupField & EnumField & BlockField;
export declare type Schema = Array<Field>;
export declare type ContentType = {
    description: string;
    schema: Schema;
    _version: number;
} & Identifier;
