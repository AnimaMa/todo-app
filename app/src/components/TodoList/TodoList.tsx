import React, { useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import { Todo, TodoProps } from "../Todo/Todo";
import { AddTodo } from "../Todo/AddTodo";
import axios from "axios";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;
  const [todos, setTodos] = useState<TodoProps[]>();

  useEffect(() => {
    axios({
      method: "get",
      url: `${apiUrl}/todos`,
    })
      .then((response) => setTodos(response.data.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <AddTodo />
      </div>
      {!todos?.length && <p>"nic sa tu nenachadza"</p>}
      <ul className="max-w-lg mx-auto mt-12 flex justify-center gap-y-4 flex-col">
        {todos?.map((todo: TodoProps) => (
          <li
            key={todo._id}
            className="w-full flex justify-between transition-all duration-500"
          >
            <Todo text={todo.text} isDone={todo.isDone} _id={todo._id} />
          </li>
        ))}
      </ul>
    </>
  );
};
