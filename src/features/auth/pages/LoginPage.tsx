import LoginForm from "../components/LoginForm";
function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Section */}
      <div className="flex flex-1 items-center justify-center">
        <LoginForm />
      </div>

      {/* Right Section (optional image / gradient) */}
      <div className="hidden flex-1 bg-linear-to-br from-blue-600 to-indigo-700 md:block" />
    </div>
  );
}

export default LoginPage;
