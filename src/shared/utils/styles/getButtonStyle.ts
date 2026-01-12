import {
  sizeStyles,
  variantStyles,
  type ButtonSize,
  type ButtonVariant,
} from "../../../config/constants/Button";

export function getButtonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
) {
  return `${variantStyles[variant]} ${sizeStyles[size]}`;
}
