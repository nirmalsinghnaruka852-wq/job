import { sizeStyles, variantStyles, type ButtonSize, type ButtonVariant } from "./Constant/Button";

export function getButtonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
) {
  return `${variantStyles[variant]} ${sizeStyles[size]}`;
}
