
import SignupFrom from "./SignupFrom"

function SignupPage() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col md:flex-row w-full">
        {/* left part */}
        <div className="flex-1 flex justify-center items-center">
          
          <SignupFrom />
        </div>

        {/* right part */}
        <div className="hidden md:flex md:flex-1 bg-gradient-to-br from-blue-600 to-indigo-700">
        </div>
      </div>
    </div>
  )
}

export default SignupPage
