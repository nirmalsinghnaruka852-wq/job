import {
  forwardRef,
  useImperativeHandle,
  useState,
  type InputHTMLAttributes,
} from "react";
import { useToggle } from "../../Hooks";
import { IconButton, IsWhen } from ".";


type dataType = string | number;
type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export type InputHandler = {
  getValue: () => dataType;
  setValue: (val: dataType) => void;
};

const Input = forwardRef<InputHandler, InputProps>((props, ref) => {
  const [data, setData] = useState<dataType>("");
  const [showPassword, toggle] = useToggle(false);

  const type = props.type === "password"? showPassword ? "text" : "password" : props.type;

  useImperativeHandle(ref, () => ({
    getValue: () => data,
    setValue: (val: dataType) => setData(val),
  }));
  const Handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div className="w-full relative">
      <input {...props} value={data}  type={type}onChange={Handler} />
      <IsWhen when={!!(props.type === "password")}>
        {() => {
          return (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <IconButton onClick={()=>toggle()}
              type='button'
                name={showPassword ? "EyeIcon" : "EyeOffIcon"}
              ></IconButton>
            </div>
          );
        }}
      </IsWhen>
    </div>
  );
});



Input.displayName ='Input' 

export default Input;
