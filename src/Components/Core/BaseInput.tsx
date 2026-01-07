import { forwardRef, type InputHTMLAttributes } from "react";

export  type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ type = "text", ...props }, ref) => {
    return <input ref={ref} type={type} {...props} />;
  }
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
