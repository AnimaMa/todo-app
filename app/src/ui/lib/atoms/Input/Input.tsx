import React from "react";

export interface InputProps {
  type: string;
}

export const Input = (props: InputProps) => {
  const { type } = props;
  return (
    <>
      <input type={type} className="bg-red-300" />
      <h1 className="font-bold text-green-800">test</h1>
    </>
  );
};
