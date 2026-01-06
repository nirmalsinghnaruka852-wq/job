import React from "react";
import Icon, { type IconProps } from "../Core/Icon";

type IconButtonProps = IconProps & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
}

const IconButton = React.memo(({ onClick, ...props }: IconButtonProps) => {
  return (
    <button
      // className="bg-blue-500 text-white hover:bg-blue-600"
      onClick={onClick}
      style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
    >
      <Icon {...props} />
    </button>
  );
});

export default IconButton;
