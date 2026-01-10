import type { FieldName, Validator } from "./index";


export const required =
  (msg = "This field is required"): Validator =>
  (value) =>
    value === undefined || value === null || value === "" ? msg : undefined;

export const minLength =
  (len: number, msg?: string): Validator =>
  (value) =>
    typeof value === "string" && value.length < len
      ? msg ?? `Minimum ${len} characters`
      : undefined;

export const pattern =
  (regex: RegExp, msg: string): Validator =>
  (value) =>
    typeof value === "string" && !regex.test(value) ? msg : undefined;

export const upperCase =
  (msg: string = "first letter should be Capital "): Validator =>
  (value: any) =>
    typeof value === "string" &&
    value.length > 0 &&
    value[0] === value[0].toUpperCase()
      ? undefined
      : msg;

export const charactersComposition =
  (
    msg: string = "Password must include uppercase, lowercase, number, and special character"
  ): Validator =>
  (value: any) => {
    if (!(typeof value === "string")) return msg;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (const ch of value) {
      if (ch >= "A" && ch <= "Z") hasUppercase = true;
      else if (ch >= "a" && ch <= "z") hasLowercase = true;
      else if (ch >= "0" && ch <= "9") hasNumber = true;
      else hasSpecial = true;
    }
    return hasLowercase && hasNumber && hasSpecial && hasUppercase
      ? undefined
      : msg;
  };
export const noSpacesAllowed = (field: FieldName, msg?: string) :Validator=> 
  (value: any) => {
    if (!(typeof value === "string")) return msg ?? `${field} must be a string`;

    return value.includes(" ")
      ? msg ?? `${field} must not contain spaces`
      : undefined;
  };


export const emailValidator =
  (msg: string = "Invalid email address"): Validator =>
  (value: any) => {
    if (typeof value !== "string") return msg;

    if (value.length === 0) return msg;

    if (value.includes(" ")) return "Email must not contain spaces";

    const atIndex = value.indexOf("@");
    const lastAtIndex = value.lastIndexOf("@");

    if (atIndex === -1 || atIndex !== lastAtIndex)
      return "Email must contain exactly one @";

    const local = value.slice(0, atIndex);
    const domain = value.slice(atIndex + 1);

    if (!local || !domain) return msg;

    if (local.startsWith(".") || local.endsWith("."))
      return "Email local part is invalid";

    if (local.includes(".."))
      return "Email local part cannot contain consecutive dots";

    if (!domain.includes(".")) return "Email domain must contain a dot";

    if (domain.startsWith(".") || domain.endsWith("."))
      return "Email domain is invalid";

    if (domain.includes(".."))
      return "Email domain cannot contain consecutive dots";
    const tld = domain.split(".").pop();
    if (!tld || tld.length < 2) return "Email top-level domain is invalid";

    return undefined;
  };
