type ButtonProps = {
  title: string | number;
  onClick?: (event :React.MouseEvent<HTMLButtonElement>) => void; 
  className?: string;   
  disabled?: boolean;    
};

function Button({ title, onClick, className, disabled , ...props}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${className || ""}`}
      disabled={disabled}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
