import { Button, Input } from "../../Components/Core";

function SignupFrom (){

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
            placeholder="Your full name"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">Email</label>
          <Input
            type="email"
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
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 w-full"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-black font-bold">
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="••••••••"
            className="rounded-md border border-gray-300 px-3 py-2 outline-none bg-blue-50 w-full"
          />
        </div>

        {/* Button */}
        <Button
          title="Sign Up"
          onClick={() => {}}
          className="mt-2 rounded-md bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
        />
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a className="cursor-pointer text-blue-600 hover:underline">
          Sign in
        </a>
      </div>
    </div>
  );
};


export default SignupFrom