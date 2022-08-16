import React from "react";
import { DonutChartComponent } from "../DonutChart/DonutChart";
import { Container } from "./Container/Container";
import { Header } from "./Header/Header";
import TodoListContextProvider from "./context/TodoListContextProvider";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <TodoListContextProvider>
        <div className="flex overflow-hidden ">
          <Header />
          <main className="w-[60%] h-screen py-10 rounded-l-md  ">
            <Container>{children}</Container>
          </main>
          <div className="w-[40%] max-w-sm">
            <Container className="h-full">
              <DonutChartComponent />
            </Container>
          </div>
        </div>
      </TodoListContextProvider>
    </>
  );
};
