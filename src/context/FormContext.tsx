import React, { createContext, useReducer, useContext } from "react";

type FormState = Record<string, any>;

type Action =
  | { type: "SET_FIELD"; field: string; value: any }
  | { type: "RESET" };

type FormContextType = {
  state: FormState;
  dispatch: React.Dispatch<Action>;
};

const FormContext = createContext<FormContextType>({
  state: {},
  dispatch: () => {},
});

// Reducer function
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value }; 
    case "RESET":
      return {}; 
    default:
      return state;
  }
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, {}); 
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
export const useFormContext = () => useContext(FormContext);
