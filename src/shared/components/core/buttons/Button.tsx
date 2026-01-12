import type { ButtonHTMLAttributes } from "react";

  type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>,'onClick'>&{
    title: string | number;
    onClick?: (event :React.MouseEvent<HTMLButtonElement>) => void; 
    className?: string;      
  };

  function Button({ title, onClick, className, ...props}: ButtonProps) {

    return (
      <button
        onClick={onClick}
        className={`cursor-pointer ${className || ""}`}
        disabled={props?.disabled}
        {...props}
      >
        {title}
      </button>
    );
  }

  export default Button;
