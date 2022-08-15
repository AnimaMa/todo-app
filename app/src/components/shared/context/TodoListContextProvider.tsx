import React, { useEffect, useState } from "react";
import { getTodoList } from "../../../ui/api/jsonserver";
import { ITodo } from "../../Todo/Todo";
import { TodoListContext } from "./TodoListContext";

interface TodoListContextProviderProps {
  children?: React.ReactNode;
}
export default function TodoListContextProvider(
  props: TodoListContextProviderProps
) {
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const todoList = await getTodoList();
        setAllTodos([...allTodos, todoList]);
        console.log(allTodos);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <TodoListContext.Provider value={{ todos: allTodos }}>
      {props.children}
    </TodoListContext.Provider>
  );
}
