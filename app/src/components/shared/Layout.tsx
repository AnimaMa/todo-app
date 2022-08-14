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
      <div className="flex ">
        <Header />
        <main className="w-[80%] min-h-[100vh] py-10">
          <Container>{children}</Container>
        </main>
      </div>

      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
};
