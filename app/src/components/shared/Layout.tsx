import React from "react";
import { Container } from "./Container/Container";
import { Header } from "./Header/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className="flex overflow-hidden ">
        <Header />
        <main className="w-[80%] h-screen py-10">
          <Container>{children}</Container>
        </main>
      </div>
    </>
  );
};
