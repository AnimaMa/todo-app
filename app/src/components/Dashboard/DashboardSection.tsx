import React from "react";
import { Card } from "../shared/Card/Card";
import { DashboardCard } from "./components/DashboardCard";

export interface DashboardSectionProps {}

export const DashboardSection = (props: DashboardSectionProps) => {
  const {} = props;
  return (
    <section className="px-20 pt-10">
      <header className="mb-10">
        <h1>Dashboard</h1>
      </header>

      <DashboardCard />
    </section>
  );
};
