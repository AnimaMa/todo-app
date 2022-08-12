import React from "react";

export interface TagProps {
  label: string;
  variant: "success" | "waiting";
}

export const Tag = (props: TagProps) => {
  const { label, variant } = props;

  const SUCCESS_TAG = "bg-teal-300 text-teal-800";
  const WAITING_TAG = "bg-red-300 text-red-800";

  const getTagVariant = (variant: string) => {
    if (variant === "success") {
      return SUCCESS_TAG;
    } else if (variant === "waiting") {
      return WAITING_TAG;
    }
  };
  return (
    <span
      className={`py-1 px-2 text-xs rounded-full ${getTagVariant(variant)}`}
    >
      {label}
    </span>
  );
};
