
export type Validator = (value: any) => string | undefined;

export const required = (msg = "This field is required"): Validator =>
  (value) =>
    value === undefined || value === null || value === ""
      ? msg
      : undefined;

export const minLength = (len: number, msg?: string): Validator =>
  (value) =>
    typeof value === "string" && value.length < len
      ? msg ?? `Minimum ${len} characters`
      : undefined;

export const pattern = (regex: RegExp, msg: string): Validator =>
  (value) =>
    typeof value === "string" && !regex.test(value)
      ? msg
      : undefined;
