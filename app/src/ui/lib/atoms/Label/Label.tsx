import React from "react";

export interface LabelProps {
  forName: string;
  label: string;
}

export const Label = (props: LabelProps) => {
  const { forName, label } = props;
  return (
    <label htmlFor={forName} className="text-slate-500">
      {label}
    </label>
  );
};
