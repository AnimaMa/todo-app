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
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const todoList = await getTodoList();
        setAllTodos(todoList);
        setLoading(false);
      } catch (error: any) {
        if (error.response) {
          setLoading(false);
          setError(true);
        }
      }
    };

    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, []);

  return (
    <TodoListContext.Provider
      value={{ todos: allTodos, isLoading: loading, isError: error }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}
