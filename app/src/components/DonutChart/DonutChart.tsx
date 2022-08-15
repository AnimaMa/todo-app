import React, { useEffect, useState } from "react";
import DonutChart from "react-donut-chart";

import { ITodo } from "../Todo/Todo";

export interface DonutChartProps {}

//TODO:
export const DonutChartComponent = (props: DonutChartProps) => {
  const {} = props;
  const [done, setDone] = useState<ITodo[]>([]);
  const [notDone, setNotDone] = useState<ITodo[]>([]);
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    // const getTodos = async () => {
    //   const list = await getTodoList();
    //   setList(list.data.data);
    // };
    // getTodos();
    // getTodos().catch(console.error);
    // const fetchNotDoneTodos = async () => {
    //   const data = await getNotDoneTodos();
    //   setNotDone(data);
    // };
    // fetchNotDoneTodos().catch(console.error);
  }, []);

  console.log("notdone", list.length);
  console.log("done.", done.length);

  const dataDone = done.length - 1;
  const dataNotDone = notDone.length - 1;
  return (
    <DonutChart
      data={[
        {
          label: "Done",
          value: dataDone,
        },
        {
          label: "Waiting",
          value: dataNotDone,
        },
      ]}
      colors={["#5eead4", "#fda4af"]}
      strokeColor={"#5b21b6"}
      className={"donutchart donutchart-custom-class"}
    />
  );
};
