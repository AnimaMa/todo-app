import React from "react";
import DonutChart from "react-donut-chart";

export interface DonutChartProps {}

export const DonutChartComponent = (props: DonutChartProps) => {
  const {} = props;
  return (
    <DonutChart
      data={[
        {
          label: "Done",
          value: 55,
        },
        {
          label: "Waiting",
          value: 45,
        },
      ]}
      colors={["#5eead4", "#fda4af"]}
      strokeColor={"#5b21b6"}
      className={"donutchart donutchart-custom-class"}
    />
  );
};
