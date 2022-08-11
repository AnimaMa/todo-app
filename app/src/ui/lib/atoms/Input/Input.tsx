import React from "react";

export interface InputProps {
  type: string;
  id: string;
  name: string;
}

export const Input = (props: InputProps) => {
  const { type, id, name } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="bg-slate-100 py-3 px-2 rounded-xl w-full outline-blue-400"
    />
  );
};
