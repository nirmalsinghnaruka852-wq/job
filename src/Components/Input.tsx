import { forwardRef, useImperativeHandle, useState, type InputHTMLAttributes } from "react";
import IsWhen from "./Core/Iswhen";
import useToggle from "../Hooks/useToggle";


type dataType = string | number 
type InputProps = InputHTMLAttributes<HTMLInputElement>&{}
type IconName = 'EyeIcon'| 'EyeOffIcon'

export type InputHandler = {
  getValue: () => dataType ;
  setValue: (val: dataType ) => void;
};

const Input = forwardRef<InputHandler, InputProps>((props,ref )=>{
  const [data , setData ]= useState<dataType>('')
  const [showPassword , toggle ] = useToggle(false)


  const type = props.type==="password"? (showPassword ? 'text': 'password'): props.type

  useImperativeHandle(ref,()=>({
    getValue:()=> data,
    setValue :(val:dataType )=> setData(val)
  }))
    const Handler = (event :React.ChangeEvent<HTMLInputElement>)=>{
        setData(event.target.value)
    }

    return <div className="w-full relative">
        <input {...props} value={data} onChange={Handler}/>
        <IsWhen  when={!!(props.type==='password')}>{EyeBar}
            </IsWhen>
        </div>
})




function EyeBar(){
    return <div>
        <h2>asdkfjaskldfkladsjfl</h2>
    </div>
}

export default Input