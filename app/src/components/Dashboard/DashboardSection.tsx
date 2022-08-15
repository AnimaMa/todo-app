import React from "react";
import { DashboardCard } from "./components/DashboardCard";

export const DashboardSection = () => {
  return (
    <section className="px-20 pt-10">
      <header className="mb-10">
        <h1>Dashboard</h1>
      </header>

      <DashboardCard />
    </section>
  );
};
