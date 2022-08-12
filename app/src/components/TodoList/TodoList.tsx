import React, { useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import { TodoProps } from "../Todo/Todo";
import { AddTodo } from "../Todo/AddTodo";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;
  const [todos, setTodos] = useState<TodoProps[]>();

  useEffect(() => {
    fetch(`${apiUrl}/todos`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setTodos(json.data));
  }, []);

  console.log(todos);

  const getTodoStatus = (isDone: boolean) => {
    if (isDone === true) {
      return (
        <span className="py-1 px-2  text-xs rounded-full bg-teal-300 text-teal-800">
          done
        </span>
      );
    } else {
      return (
        <span className="py-1 px-2 text-xs rounded-full bg-red-300 text-red-800">
          waiting
        </span>
      );
    }
  };
  return (
    <>
      <div>
        <AddTodo />
      </div>
      {!todos?.length && <p>"nic sa tu nenachadza"</p>}
      <ul className="max-w-lg mx-auto mt-12 flex justify-center gap-y-4 flex-col">
        {todos?.map((todo: TodoProps) => (
          <li className="w-full flex justify-between">
            <p className="text-slate-600 capitalize">{todo.text}</p>
            {getTodoStatus(todo.isDone)}
          </li>
        ))}
      </ul>
    </>
  );
};
