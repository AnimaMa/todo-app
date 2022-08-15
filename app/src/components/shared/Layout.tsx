import React from "react";
import { DonutChartComponent } from "../DonutChart/DonutChart";
import { TodoListContext } from "./context/TodoListContext";
import { Container } from "./Container/Container";
import { Header } from "./Header/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      {/* <TodoListContext.Provider> */}
        <div className="flex overflow-hidden ">
          <Header />
          <main className="w-[60%] h-screen py-10 rounded-l-md  ">
            <Container>{children}</Container>
          </main>
          <div className="w-[40%] max-w-sm">
            {" "}
            <DonutChartComponent />{" "}
          </div>
        </div>
      {/* </TodoListContext.Provider> */}
    </>
  );
};
