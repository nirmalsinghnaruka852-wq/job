import { CrossIcon } from "lucide-react";
import { NavLinks } from "../../../config/constants/NavLink";
import Navigater from "./Navigator";

type SideBarProps = {
  close: () => void;
  go: (path: import("../../../config/constants/NavLink").RoutePath) => void;
};

function SideBar({ close, go }: SideBarProps) {
  return (
    <div className="w-full p-2">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-end" onClick={close}>
          <CrossIcon size={20} />
        </div>

        {NavLinks.map(({ name, path }) => (
          <Navigater key={path} onClick={() => go(path)} title={name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
