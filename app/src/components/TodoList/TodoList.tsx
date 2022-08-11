import React, { useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import { TodoProps } from "../Todo/Todo";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;
  const [todos, setTodos] = useState<TodoProps[]>();

  useEffect(() => {
    fetch(`${apiUrl}/todos`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  console.log(todos);
  if (!todos?.length) {
    return <p>"nic sa tu nenachadza"</p>;
  }

  return (
    <>
      <div></div>
      <div>
        {todos?.map((todo) => (
          <p>{todo.text}</p>
        ))}
      </div>
    </>
  );
};
