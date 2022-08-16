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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const todoList = await getTodoList();
        setAllTodos(todoList);
        console.log(allTodos);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(() => {
      getData();
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <TodoListContext.Provider value={{ todos: allTodos, isLoading: loading }}>
      {props.children}
    </TodoListContext.Provider>
  );
}
