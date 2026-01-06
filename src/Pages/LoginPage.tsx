import { useRef } from "react";
import type { InputHandler } from "../Components/Input";
import Input from "../Components/Input";

function LoginPage() {



  const email = useRef<InputHandler>(null)
  const password = useRef<InputHandler>(null)


  const Handler =()=>{

  }
  return (
    <div className="flex min-h-screen w-full bg-white">
      
      {/* Left Section */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-8 ">
          
          <h2 className="mb-6 text-center text-2xl font-semibold text-black">
            Sign in to your account
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-black font-bold">Email</label>
              <Input
              ref={email}
                type="email"
                placeholder="you@example.com"
                className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-bold text-black">Password</label>
              <Input
              ref={password}
                type="password"
                placeholder="••••••••"
                className="rounded-md border  border-gray-300 px-3 py-2 outline-none bg-blue-50"
              />
            </div>

            <button onClick={Handler} className="mt-2 rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
              Sign in
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Not registered yet?{" "}
            <a className="cursor-pointer text-blue-600 hover:underline">
              Create an account
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (optional image / gradient) */}
      <div className="hidden flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 md:block" />
    </div>
  );
}

export default LoginPage;
