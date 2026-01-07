
import { useCallback } from "react";
import { useFormContext } from "../context/FormContext";

export const useFormField = (name: string) => {
  const { state, dispatch } = useFormContext();

  const setValue = useCallback(
    (value: any) => dispatch({ type: "SET_FIELD", field: name, value }),
    [dispatch, name]
  );

  const value = state[name] ?? "";

  return { value, setValue };
};
