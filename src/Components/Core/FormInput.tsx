import { memo, type InputHTMLAttributes } from "react";
import { useFormField } from "../../Hooks/useFormField";

type FormInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,'defaultValue'>&{
  stateName: string;
};

  const FormInput = memo(({ stateName, onChange,placeholder, ...props }: FormInputProps) => {
  const { value, setValue } = useFormField(stateName);

  return (
    <input
     {...props}
      value={value}
      onChange={(e) => {setValue(e.target.value) ; onChange?.(e)}}
    />
  );
});


export default FormInput