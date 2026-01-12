import React from "react";
import {  Icon,type IconProps } from "../index";

type IconButtonProps = IconProps & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const IconButton = React.memo(({ onClick, type, ...props }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
      type={type ?? "button"}
    >
      <Icon {...props} />
    </button>
  );
});

export default IconButton;
