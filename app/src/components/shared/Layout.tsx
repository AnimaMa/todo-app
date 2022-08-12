import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container/Container";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <header className="w-full py-6 px-3 flex  gap-6 text-cyan-600">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/todos">TodoList</Link>
        </span>
      </header>
      <main>
        <Container>{children}</Container>
      </main>

      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
};
