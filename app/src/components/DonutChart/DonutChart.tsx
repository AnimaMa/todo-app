import React, { useContext } from "react";
import DonutChart from "react-donut-chart";
import { Spinner } from "../../ui/lib/atoms/Spinner/Spinner";
import { TodoListContext } from "../shared/context/TodoListContext";

export const DonutChartComponent = () => {
  const todoContext = useContext(TodoListContext);

  return (
    <div className="flex items-center justify-center h-full">
      {todoContext?.todos.length ? (
        <DonutChart
          data={[
            {
              label: "Done",
              value: todoContext?.doneCountTodos,
            },
            {
              label: "Waiting",
              value: todoContext.notDoneCountTodos,
            },
          ]}
          colors={["#5eead4", "#fda4af"]}
          strokeColor={"#5b21b6"}
          className={"donutchart donutchart-custom-class"}
        />
      ) : (
        <div className="flex justify-center">
          <Spinner fillColor="fill-fuchsia-900" />
        </div>
      )}
    </div>
  );
};
