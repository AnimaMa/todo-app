import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <section className="mx-auto px-3">{children}</section>;
};
