export type FieldName = "password" | "name" | "email";
export type Validator = (value: any) => string | undefined;