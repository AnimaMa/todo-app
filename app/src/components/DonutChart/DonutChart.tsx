import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import DonutChart from "react-donut-chart";
import { getDoneTodos, getNotDoneTodos } from "../../ui/api/jsonserver";
import { ITodo } from "../Todo/Todo";

export interface DonutChartProps {}

export const DonutChartComponent = (props: DonutChartProps) => {
  const {} = props;
  const [done, setDone] = useState<ITodo[]>([]);
  const [notDone, setNotDone] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchDoneTodos = async () => {
      const data = await getDoneTodos();
      setDone(data);
      console.log(data.length);
    };

    fetchDoneTodos().catch(console.error);

    const fetchNotDoneTodos = async () => {
      const data = await getNotDoneTodos();
      setNotDone(data);
      console.log(data.length);
    };

    fetchNotDoneTodos().catch(console.error);
  }, []);

  return (
    <DonutChart
      data={[
        {
          label: "Done",
          value: done.length,
        },
        {
          label: "Waiting",
          value: notDone.length,
        },
      ]}
      colors={["#5eead4", "#fda4af"]}
      strokeColor={"#5b21b6"}
      className={"donutchart donutchart-custom-class"}
    />
  );
};
