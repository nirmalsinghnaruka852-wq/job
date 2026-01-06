import { useState, type HTMLAttributes } from "react";
import { Icon, IconButton, IsWhen } from "../Core";
type Active = "none" | "block";

type JobProfileProps = HTMLAttributes<HTMLDivElement>;

function JobProfile({ ...props }: JobProfileProps) {
  const [active, setActive] = useState<Active>("none");

  const SaveHandler = () => {
    // implement save logic here
  };

  const BlockHandler = () => {
    setActive("block");
  };

  return (
    <>
      {/* Main Job Card */}
      <div
        {...props}
        className={`flex p-4 border border-gray-200 rounded-xl shadow-sm justify-between bg-white transition-all duration-500 ease-in-out overflow-hidden ${
          active === "block" ? "max-h-0 p-0 opacity-0" : "max-h-[500px] opacity-100"
        } ${props.className || ""}`}
      >
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold text-gray-800">
            AI Automation Software Engineer – Internship (3-Month Paid Internship)
          </h6>
          <h3 className="text-md font-medium text-gray-700">Company Name</h3>
          <h4 className="text-sm text-gray-500">Type</h4>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              Example Tag
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Another Tag
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <IconButton
            name="Save"
            onClick={SaveHandler}
            // className="bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition-transform duration-150"
          />
          <IconButton
            name="Blocks"
            onClick={BlockHandler}
            // className="bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-transform duration-150"
          />
        </div>
      </div>

      {/* Hidden Job Card */}
      <IsWhen when={active === "block"}>
        {() => (
          <div
            className="flex p-4 border border-gray-200 rounded-xl shadow-sm justify-start gap-3 bg-gray-50 transition-all duration-500 ease-in-out opacity-100"
          >
            <div className="flex items-start">
              <Icon name="Blocks" size={20} />
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-lg font-semibold text-gray-800">Job hidden</h6>
              <h3 className="text-md text-gray-700">
                We will not show you this job again.
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                  Undo
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Update Job Preference
                </button>
              </div>
            </div>
          </div>
        )}
      </IsWhen>
    </>
  );
}

export default JobProfile;
