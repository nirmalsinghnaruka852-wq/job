import { forwardRef, useImperativeHandle, useState, type InputHTMLAttributes} from "react";
import { useToggle } from "../../Hooks";
import { IconButton, IsWhen } from ".";

type dataType = string | number;
type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export type InputHandler = {
  getValue: () => dataType;
  setValue: (val: dataType) => void;
  setError: (msg: string | undefined) => void;
  setClear: () => void;
};

const Input = forwardRef<InputHandler, InputProps>((props, ref) => {
  const [data, setData] = useState<dataType>("");
  const [showPassword, toggle] = useToggle(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const type =
    props.type === "password"
      ? showPassword
        ? "text"
        : "password"
      : props.type;

  useImperativeHandle(ref, () => ({
    getValue: () => data,
    setValue: (val: dataType) => setData(val),
    setError: (msg: string | undefined) => setError(msg),
    setClear: () => setData(""),
  }));
  const Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div className="w-full relative">
      <input
        {...props}
        value={data}
        type={type}
        onChange={(event) => {
          Handler(event);
          setError(undefined);
        }}
      />
      <IsWhen when={!!(props.type === "password")}>
        {() => {
          return (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <IconButton
                onClick={() => toggle()}
                type="button"
                name={showPassword ? "EyeIcon" : "EyeOffIcon"}
              ></IconButton>
            </div>
          );
        }}
      </IsWhen>
      <IsWhen when={!!error}>
        {() => <p className="text-red-500 text-sm">{error}</p>}
      </IsWhen>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
