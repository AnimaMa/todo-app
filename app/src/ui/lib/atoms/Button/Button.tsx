import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "primary" | "secondary";
}

const BASE_BUTTON =
  "px-6 py-3 rounded-3xl text-white hover:opacity-70 transition-all ease-in-out duration-300 ";
const PRIMARY_BUTTON = `${BASE_BUTTON} bg-blue-400`;
const SECONDARY_BUTTON = `${BASE_BUTTON} bg-violet-300`;

export const Button = (props: ButtonProps) => {
  const { variant, title, ...restOfProps } = props;
  return (
    <button
      {...restOfProps}
      className={` ${
        variant === "primary" ? PRIMARY_BUTTON : SECONDARY_BUTTON
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
