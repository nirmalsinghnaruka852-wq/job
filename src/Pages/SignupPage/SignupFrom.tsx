import {  useRef } from "react";
import {Button,Input, type InputHandler,} from "../../Components/Core";
import { emailCheck, nameCheck, passwordCheck, type Validator } from "../../validators/index";
type FieldMapItem ={
  ref: React.RefObject<InputHandler | null>
  validator:Validator
}

function SignupFrom() {
  const nameRef = useRef<InputHandler>(null);
  const emailRef = useRef<InputHandler>(null);
  const passwordRef = useRef<InputHandler>(null);
  const confirmPasswordRef = useRef<InputHandler>(null);


  const fieldMap :FieldMapItem[] =  [
  { ref: nameRef, validator: nameCheck },
  { ref: emailRef, validator: emailCheck },
  { ref: passwordRef, validator: passwordCheck },
]


const Handler = () => {
  let hasError = false;

  for (const field of fieldMap) {
    const value = field.ref.current?.getValue() ?? "";
    const error = field.validator(value);
    field.ref.current?.setError(error);

    if (error) hasError = true;
  }

  const passwordValue = passwordRef.current?.getValue() ?? "";
  const confirmValue = confirmPasswordRef.current?.getValue() ?? "";
  const confirmError =
    passwordValue !== confirmValue ? "Passwords do not match" : undefined;
  confirmPasswordRef.current?.setError(confirmError);

  if (confirmError) hasError = true;

  if (hasError) return; 

  console.log("All fields valid! Submit the form here.");

  //  now the remining is the api call and handling the api call
};





  
  const confirmPasswordHandler = () => {
    const password = passwordRef.current?.getValue() ?? "";
    const confirmPassword = confirmPasswordRef.current?.getValue() ?? "";
    if (password != confirmPassword) {
      confirmPasswordRef.current?.setError("");
    }
    return;
  };

  return (
    <div className="w-full  rounded-lg bg-white p-8">
      <h2 className="mb-6 text-center text-2xl font-semibold text-black">
        Create your account
      </h2>

      <div className="flex flex-col gap-4">
        {/* Name */}

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">Name</label>
          <Input
            type="text"
            ref={nameRef}
            placeholder="Your full name"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">Email</label>
          <Input
            type="email"
            ref={emailRef}
            placeholder="you@example.com"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">Password</label>
          <Input
            type="password"
            placeholder="••••••••"
            ref={passwordRef}
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 w-full"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">
            Confirm Password
          </label>
          <Input
            ref={confirmPasswordRef}
            type="password"
            placeholder="••••••••"
            onBlur={confirmPasswordHandler}
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 w-full"
          />
        </div>

        {/* Button */}
        <Button
          onClick={Handler}
          title="Sign Up"
          type="button"
          className="mt-2 rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
        />
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a className="cursor-pointer text-blue-600 hover:underline">Sign in</a>
      </div>
    </div>
  );
}

export default SignupFrom;
