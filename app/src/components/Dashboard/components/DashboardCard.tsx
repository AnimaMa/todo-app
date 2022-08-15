import React from "react";
import { Card } from "../../shared/Card/Card";
import { DashboardTaskOverview } from "./DashboardTaskOverview";
import { BsCheckAll, BsClockHistory, BsListTask } from "react-icons/bs";
export interface DashboardCardProps {
  className?: string;
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { className } = props;
  return (
    <Card className={`${className}`}>
      <h2 className="font-semibold">Task Overview</h2>
      <div className="my-12 grid grid-cols-3 gap-x-24">
        <DashboardTaskOverview
          title={"All tasks"}
          icon={<BsListTask />}
          count={"23"}
          bgColor="bg-purple-700"
        />
        <DashboardTaskOverview
          title={"Waiting tasks"}
          icon={<BsClockHistory />}
          count={"23"}
          bgColor="bg-red-200"
        />

        <DashboardTaskOverview
          title={"Done tasks"}
          icon={<BsCheckAll />}
          count={"23"}
          bgColor="bg-teal-400"
        />
      </div>
    </Card>
  );
};
