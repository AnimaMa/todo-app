import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "primary" | "secondary" | "text";
  className?: string;
  children?: React.ReactNode;
}

const BASE_BUTTON =
  "px-6 py-3 rounded-3xl text-white hover:opacity-70 transition-all ease-in-out duration-300 ";

const btnVariants = {
  text: BASE_BUTTON,
  primary: `${BASE_BUTTON} bg-blue-400`,
  secondary: `${BASE_BUTTON} bg-violet-300`,
};
export const Button = (props: ButtonProps) => {
  const { variant, title, className, children, ...restOfProps } = props;
  return (
    <button
      {...restOfProps}
      className={` ${btnVariants[variant]} ${className}`}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
