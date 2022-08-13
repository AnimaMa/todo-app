import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container/Container";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const activeClass = "text-cyan-700 font-semibold";
  return (
    <>
      <header className="w-full py-6 px-3 flex  gap-6 text-cyan-600">
        <span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Home
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/add-todo"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Add Todo
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/todos"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            TodoList
          </NavLink>
        </span>
      </header>
      <main className="min-h-[100vh]">
        <Container>{children}</Container>
      </main>

      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
};
