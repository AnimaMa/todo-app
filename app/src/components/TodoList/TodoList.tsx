import React, { useEffect } from "react";
import { apiUrl } from "../../api/api";
import { AddTodo } from "../Todo/AddTodo";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;

  // useEffect(() => {
  //   fetch(`${apiUrl}/todos`, {
  //     method: "GET",
  //   })
  //     .then((response) => JSON.stringify(response))
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <AddTodo />
    </>
  );
};
