import React from "react";

export interface AlertProps {
  children: React.ReactNode;

  variant: "success" | "error" | "info";
}

export const alertVariants = {
  success: `bg-green-200 text-green-800`,
  error: `bg-red-200 text-red-800`,
  info: `text-blue-700 bg-blue-100`,
};

const Alert = (props: AlertProps) => {
  const { variant, children } = props;
  return (
    <div
      className={`p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg ${alertVariants[variant]}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
