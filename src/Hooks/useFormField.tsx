
import { useCallback } from "react";
import { useFormContext } from "../context/FormContext";


type useFormFieldProps ={
  name :string
  validate?: (value: any) => string | undefined
}

export const useFormField = ({name , validate}:useFormFieldProps)  => {
  const { state, dispatch } = useFormContext();
  
  const value = state.values[name] ?? "";
  const error = state.errors[name] 

   const setValue = useCallback(
    (newValue: any) => {
      dispatch({ type: "SET_FIELD", field: name, value: newValue });
      if (validate) {
        dispatch({
          type: "SET_ERROR",
          field: name,
          error: validate(newValue),
        });
      }
    },
    [dispatch, name, validate]
  );
  
   

  return { value, setValue , error};
};
