import { useMemo } from "react";
import { Icon, type IconName } from "../core";

type NavigatorProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  iconName?: IconName;
};

function Navigator({ title, iconName, ...props }: NavigatorProps) {
  const name = useMemo(() => iconName ?? "AlignLeftIcon", [iconName]);
  return (
    <div className="w-full p-2 flex justify-between " {...props}>
      <div>{title}</div>
      <div>
        <Icon name={name} size={20} />
      </div>
    </div>
  );
}

export default Navigator;
