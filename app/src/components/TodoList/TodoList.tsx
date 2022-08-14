import React, { useEffect, useState } from "react";
import { Todo, TodoProps } from "../Todo/Todo";
import axios from "axios";
import { getTodoList } from "../../ui/api/jsonserver";

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
    <section className="py-4 ">
      <div className="max-w-4xl mx-auto max-h-[85vh] overflow-y-scroll overscroll-contain">
        <ul className=" flex justify-center px-4 gap-y-4 flex-col   ">
          {todos?.map((todo: TodoProps, index: number) => (
            <li
              key={index}
              className="w-full flex justify-between transition-all duration-500"
            >
              <Todo text={todo.text} isDone={todo.isDone} id={todo.id} />
            </li>
          ))}

          {!todos?.length && (
            <p className="text-orange-600 text-lg text-center">
              {" "}
              No data found
            </p>
          )}
        </ul>
      </div>
    </section>
  );
};
