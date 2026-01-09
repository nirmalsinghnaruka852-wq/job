import React, { createContext, useReducer, useContext } from "react";

export type FormState = {
  values: Record<string , any> ;
  errors : Record<string ,string | undefined> 
}

type Action =
  | { type: "SET_FIELD"; field: string; value: any }
  | { type : 'SET_ERROR', field: string ,error?:string}
  | {type :"RESET_ERRORS"}
  | { type: "RESET" };

type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<Action>;
};
const initialState: FormState = {
  values: {},
  errors: {},
};


const FormContext = createContext<FormContextType>({
  state: initialState,
  dispatch: () => {},
});

// Reducer function
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };

    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };

    case "RESET_ERRORS":
      return {
        ...state,
        errors: {},
      };

    default:
      return state;
  }
}

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState); 
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
export const useFormContext = () => useContext(FormContext);
