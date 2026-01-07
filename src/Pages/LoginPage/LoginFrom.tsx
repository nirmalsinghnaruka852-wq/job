import { useRef } from "react";
import { Button, Input, type InputHandler } from "../../Components/Core";

function LoginForm (){
  const emailRef = useRef<InputHandler>(null);
  const passwordRef = useRef<InputHandler>(null);
 const handleSubmit = () => {
    const email = emailRef.current?.getValue() as string;
    const password = passwordRef.current?.getValue() as string;

    // Get validation errors
    const errors = validateLogin(email, password);

    // Set errors in inputs
    emailRef.current?.setError(errors.email || "");
    passwordRef.current?.setError(errors.password || "");

    if (Object.keys(errors).length > 0) return;

    // All good
    console.log("VALID DATA", { email, password });
  };


    return <div className="w-full max-w-md rounded-lg bg-white p-8 ">
          <h2 className="mb-6 text-center text-2xl font-semibold text-black">
            Sign in to your account
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-black font-bold">Email</label>
              <Input
                ref={emailRef}
                type="email"
                placeholder="you@example.com"
                className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-bold text-black">
                Password
              </label>
              <Input
                ref={passwordRef}
                type="password"
                placeholder="••••••••"
                className="rounded-md border  border-gray-300 px-3 py-2 outline-none bg-blue-50 w-full"
              />
            </div>

            <Button
              title={"Sign in"}
              onClick={handleSubmit}
              className="mt-2 rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
            />
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Not registered yet?{" "}
            <a className="cursor-pointer text-blue-600 hover:underline">
              Create an account
            </a>
          </div>
        </div>
}

export default LoginForm




// Pure validation function
function validateLogin(email: string, password: string) {
  const errors: { email?: string; password?: string } = {};

  if (!email) errors.email = "Email is required";
  if (!password || password.length < 6)
    errors.password = "Minimum 6 characters required";

  return errors;
}