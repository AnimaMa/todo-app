import React, { useContext, useEffect, useState } from "react";
import { ITodo, Todo, TodoProps } from "../Todo/Todo";
import { getTodoList } from "../../ui/api/jsonserver";
import TodoListContextProvider from "../shared/context/TodoListContextProvider";
import { TodoListContext } from "../shared/context/TodoListContext";
import { Spinner } from "../../ui/lib/atoms/Spinner/Spinner";
import Alert from "../../ui/lib/atoms/Alert/Alert";
// import TodoListProvider, { TodoListContext } from "./TodoListContext";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;

  const todoContext = useContext(TodoListContext);

  return (
    <section className="py-4 ">
      <div className="max-w-4xl mx-auto max-h-[85vh] overflow-y-scroll overscroll-contain">
        <h1 className="text-2xl mb-5 text-center">Your TodoList</h1>

        {todoContext?.isLoading && (
          <div className="flex justify-center p-10">
            <Spinner fillColor="fill-indigo-500" />
          </div>
        )}
        <ul className=" flex justify-center px-4 gap-y-4 flex-col   ">
          {todoContext?.todos?.map((todo: ITodo, index: number) => (
            <li
              key={index}
              className=" flex justify-between transition-all duration-500"
            >
              <Todo text={todo.text} isDone={todo.isDone} _id={todo._id} />
            </li>
          ))}
        </ul>

        {todoContext?.isError && (
          <div className="flex justify-center p-10">
            <Alert variant="error">
              Sorry :| The data could not be loaded...
            </Alert>
          </div>
        )}
      </div>
    </section>
  );
};
