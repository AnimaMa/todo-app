import React, { useEffect, useState } from "react";
import { Todo, TodoProps } from "../Todo/Todo";
import { AddTodo } from "../Todo/AddTodo";
import axios from "axios";
import { getTodoList } from "../../ui/api/jsonserver";
// import { getTodoList } from "../../ui/api/jsonserver";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;
  const [todos, setTodos] = useState<TodoProps[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getTodoList();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>{/* <AddTodo /> */}</div>
      <ul className="max-w-lg mx-auto mt-12 flex justify-center gap-y-4 flex-col">
        {todos?.map((todo: TodoProps, index: number) => (
          <li
            key={index}
            className="w-full flex justify-between transition-all duration-500"
          >
            <Todo text={todo.text} isDone={todo.isDone} _id={todo._id} />
          </li>
        ))}

        {!todos?.length && (
          <p className="text-orange-600 text-lg text-center"> No data found</p>
        )}
      </ul>
    </>
  );
};
