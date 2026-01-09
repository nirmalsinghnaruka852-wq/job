import type { FormHTMLAttributes } from "react";
import { FormProvider, useFormContext, type FormState } from "../../context/FormContext";
type FormProps =
  Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    children: React.ReactNode;
    onSubmit: (state: FormState) => void;
  };


function InnerForm({
  children,
  onSubmit,
  ...props
}: FormProps) {
  const { state  ,dispatch} = useFormContext();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({type : 'RESET_ERRORS'})

    const hasError = Object.values(state.errors).some(Boolean)
 
    if(hasError) return 

    onSubmit(state);
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

function Form({ children, ...props }: FormProps) {
  return (
    <FormProvider>
      <InnerForm {...props}>{children}</InnerForm>
    </FormProvider>
  );
}

export default Form;
