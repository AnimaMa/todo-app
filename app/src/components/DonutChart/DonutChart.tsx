import React, { useContext, useEffect, useState } from "react";
import DonutChart from "react-donut-chart";
import { getTodoList } from "../../ui/api/jsonserver";
import { TodoListContext } from "../shared/context/TodoListContext";

import { ITodo } from "../Todo/Todo";

export interface DonutChartProps {}

//TODO:
export const DonutChartComponent = (props: DonutChartProps) => {
  const {} = props;
  const [done, setDone] = useState<ITodo[]>([]);
  const [notDone, setNotDone] = useState<ITodo[]>([]);
  const [list, setList] = useState<ITodo[]>([]);

  const todoContext = useContext(TodoListContext);

  useEffect(() => {
    const getTodos = async () => {
      const list = await getTodoList();
      setList(list.data.data);
    };
    getTodos();
    getTodos().catch(console.error);

    if (todoContext?.todos.length) {
      const filtered: any = todoContext?.todos
        .filter((todo) => todo.isDone === true)
        .map((filteredTodo) => setDone([...done, filteredTodo]));
      console.log("done", done);
      console.log(filtered);

      if (filtered.length) {
        setDone([...done, filtered]);
      }

      const allD = todoContext?.todos?.length - 1;

      let dataDone = filtered.length - 1;
      setDone([...done, filtered]);
      console.log("dddd", done);
      const dataNotDone = notDone;
    }
  }, []);

  return (
    <>
      {todoContext?.todos && (
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
      )}
    </>
  );
};
