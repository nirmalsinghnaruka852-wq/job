import { Fragment, useState } from "react";
import SideBar from "./Sidebar";
import {
  NavLinks,
  NavLinksLogo,
  type RoutePath,
} from "../../../../config/constants/NavLink";
import { useNavigation } from "../../../hooks";
import { IconButton, IsWhen } from "../../core";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const { go } = useNavigation();

  const toggleSidebar = () => setIsShow((v) => !v);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      {/* Logo */}
      <div className="logo">LOGO</div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-4">
        {NavLinks.map(({ name, path }) => (
          <Fragment key={path}>
            <button
              onClick={() => go(path)}
              className="px-3 py-2 hover:bg-gray-100 rounded"
            >
              {name}
            </button>
            <div></div>
          </Fragment>
        ))}
      </div>

      {/* Nav Icons */}
      <div className="flex space-x-2">
        {NavLinksLogo.map(({ name, path }) => (
          <Fragment key={path}>
            <button
              key={path}
              onClick={() => go(path as RoutePath)}
              className="p-1 rounded hover:bg-gray-100"
            >
              <IconButton name={name} size={20} />
            </button>
            <div></div>
          </Fragment>
        ))}
      </div>

      {/* Sidebar (mobile) */}
      <IsWhen when={isShow}>{() => <SideBar close={close} go={go} />}</IsWhen>
    </nav>
  );
}
