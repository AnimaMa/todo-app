import React from "react";

export interface LabelProps {
  forName: string;
  label: string;
  className?: string;
}

export const Label = (props: LabelProps) => {
  const { forName, label, className } = props;
  return (
    <label htmlFor={forName} className={`text-slate-500 ${className}`}>
      {label}
    </label>
  );
};
