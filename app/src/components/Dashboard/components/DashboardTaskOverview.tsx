import React from "react";

export interface DashboardTaskOverviewProps {
  title: string;
  icon: React.ReactNode;
  count: string | number;
  className?: string;
  bgColor: string;
}

export const DashboardTaskOverview = (props: DashboardTaskOverviewProps) => {
  const { title, icon, count, className, bgColor } = props;
  return (
    <div
      className={`min-w-[8rem] flex flex-col items-center justify-start text-center   px-3 py-12 text-white rounded-lg ${bgColor} ${className}`}
    >
      <div className="rounded-full border-[1px] border-white p-4 mb-8">
        <span className="text-3xl"> {icon}</span>
      </div>
      <h3 className="mb-2">{title}</h3>
      <span className="font-semibold text-lg">{count}</span>
    </div>
  );
};
