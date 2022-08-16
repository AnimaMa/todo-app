import React, { useContext, useEffect, useState } from "react";
import { ITodo, Todo, TodoProps } from "../Todo/Todo";
import { getTodoList } from "../../ui/api/jsonserver";
import TodoListContextProvider from "../shared/context/TodoListContextProvider";
import { TodoListContext } from "../shared/context/TodoListContext";
// import TodoListProvider, { TodoListContext } from "./TodoListContext";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  const {} = props;
  const [todos, setTodos] = useState<ITodo[]>();

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

  const todoContext = useContext(TodoListContext);
  return (
    <section className="py-4 ">
      <div className="max-w-4xl mx-auto max-h-[85vh] overflow-y-scroll overscroll-contain">
        <h1 className="text-2xl mb-5 text-center">Your TodoList</h1>
        <ul className=" flex justify-center px-4 gap-y-4 flex-col   ">
          {todoContext?.todos?.map((todo: ITodo, index: number) => (
            <li
              key={index}
              className=" flex justify-between transition-all duration-500"
            >
              <Todo text={todo.text} isDone={todo.isDone} _id={todo._id} />
            </li>
          ))}

          {!todos?.length && (
            <p className="text-orange-600 text-lg text-center">No data found</p>
          )}
        </ul>
      </div>
    </section>
  );
};
