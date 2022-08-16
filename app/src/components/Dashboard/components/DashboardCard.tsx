import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../shared/Card/Card";
import { DashboardTaskOverview } from "./DashboardTaskOverview";
import { BsCheckAll, BsClockHistory, BsListTask } from "react-icons/bs";
import { TodoListContext } from "../../shared/context/TodoListContext";
export interface DashboardCardProps {
  className?: string;
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { className } = props;
  const [all, setAll] = useState(0);

  const todoContext = useContext(TodoListContext);
  useEffect(() => {
    if (todoContext?.todos) {
      const allTask = todoContext?.todos.length - 1;
      setAll(allTask);

      console.log(todoContext.doneCountTodos);
      console.log(todoContext.notDoneCountTodos);
    }
  });
  return (
    <Card className={`${className}`}>
      <h2 className="font-semibold">Task Overview</h2>
      <div className="my-12 grid grid-cols-3 gap-x-24">
        {todoContext && (
          <>
            <DashboardTaskOverview
              title={"All tasks"}
              icon={<BsListTask />}
              count={todoContext?.todos.length}
              bgColor="bg-purple-700"
            />
            <DashboardTaskOverview
              title={"Waiting tasks"}
              icon={<BsClockHistory />}
              count={todoContext?.doneCountTodos}
              bgColor="bg-red-200"
            />

            <DashboardTaskOverview
              title={"Done tasks"}
              icon={<BsCheckAll />}
              count={todoContext?.notDoneCountTodos}
              bgColor="bg-teal-400"
            />
          </>
        )}
      </div>
    </Card>
  );
};
