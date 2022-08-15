import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div
      className={`p-6   bg-white rounded-lg border border-gray-200 shadow-md  ${className}`}
    >
      {children}
    </div>
  );
};
