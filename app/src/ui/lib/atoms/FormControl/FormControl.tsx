import React from "react";

export interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}

export const FormControl = (props: FormControlProps) => {
  const { children, className } = props;
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
