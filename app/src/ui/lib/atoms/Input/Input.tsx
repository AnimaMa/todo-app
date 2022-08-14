import React, { LegacyRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name: string;
  innerRef?: any;
  className? : string;
}

export const Input = (props: InputProps) => {
  const { type, id, name, innerRef, className, ...restOfProps } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`bg-slate-100 py-3 px-2 rounded-xl w-full outline-blue-400 transition-all duration-500 ease-out ${className}`}
      ref={innerRef}
      {...restOfProps}
    />
  );
};
