import React, { useContext } from "react";
import { Card } from "../../shared/Card/Card";
import { DashboardTaskOverview } from "./DashboardTaskOverview";
import { BsCheckAll, BsClockHistory, BsListTask } from "react-icons/bs";
import { TodoListContext } from "../../shared/context/TodoListContext";
import { Spinner } from "../../../ui/lib/atoms/Spinner/Spinner";
export interface DashboardCardProps {
  className?: string;
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { className } = props;

  const todoContext = useContext(TodoListContext);

  return (
    <Card className={`${className}`}>
      <h2 className="font-semibold">Task Overview</h2>
      <div className="my-12 grid grid-cols-3 gap-x-24">
        {todoContext?.todos.length ? (
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
        ) : (
          <Spinner fillColor={"fill-violet-400"} />
        )}
      </div>
    </Card>
  );
};
