import cn from "classnames";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      //
      className={cn("rounded-lg py-2 text-center mt-4  ", className)}
    >
      {children}
    </button>
  );
};

export default Button;
