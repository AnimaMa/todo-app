import React from "react";

export interface TagProps {
  label: string;
  variant: "success" | "waiting";
}

export const Tag = (props: TagProps) => {
  const { label, variant } = props;

  const SUCCESS_TAG = "bg-teal-100 text-teal-800 shadow-teal-500/10";
  const WAITING_TAG = "bg-red-100 text-red-800 shadow-red-500/10";

  const getTagVariant = (variant: string) => {
    if (variant === "success") {
      return SUCCESS_TAG;
    } else if (variant === "waiting") {
      return WAITING_TAG;
    } else {
      return "";
    }
  };
  return (
    <span
      className={`shadow-lg py-1 px-3 text-xs rounded-full ${getTagVariant(
        variant
      )}`}
    >
      {label}
    </span>
  );
};
