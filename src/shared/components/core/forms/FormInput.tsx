import { memo, type InputHTMLAttributes } from "react";
import { useFormField } from "../../../hooks/useFormField";
import IsWhen from "../Iswhen";

type FormInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue"
> & {
  stateName: string;
  validate?: (value: any) => string | undefined;
};

const FormInput = memo(
  ({
    stateName,
    validate,
    onChange,
    placeholder,
    ...props
  }: FormInputProps) => {
    const { value, error, setValue } = useFormField({
      name: stateName,
      validate,
    });

    return (
      <div className="flex flex-col gap-1">
        <input
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IsWhen when={!!error}>
          {() => <span className="text-sm text-red-500">{error}</span>}
        </IsWhen>
      </div>
    );
  }
);

export default FormInput;
