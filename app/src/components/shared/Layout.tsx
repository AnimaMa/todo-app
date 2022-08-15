import React from "react";
import { DonutChartComponent } from "../DonutChart/DonutChart";
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
        <main className="w-[60%] h-screen py-10">
          <Container>{children}</Container>
        </main>
        <div className="w-[40%] max-w-sm">
          {" "}
          <DonutChartComponent />{" "}
        </div>
      </div>
    </>
  );
};
