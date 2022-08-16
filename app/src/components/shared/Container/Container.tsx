import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return <section className={`mx-auto px-3 ${className}`}>{children}</section>;
};
