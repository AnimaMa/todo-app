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
  const [doneTodos, setDoneTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

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

  useEffect(() => {
    const getDone = async (retrievedData: ITodo[]) => {
      if (retrievedData && !loading) {
        try {
          const filtered: any = retrievedData.filter(
            (todo) => todo.isDone === true
          );

          console.log("1ddd", doneTodos);
          console.log("FF1", filtered);
          setDoneTodos([...doneTodos, filtered]);
          setDoneTodos(filtered);

          console.log(doneTodos);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getDone(allTodos);
  }, [allTodos.length, loading]);

  return (
    <TodoListContext.Provider
      value={{
        todos: allTodos,
        isLoading: loading,
        isError: error,
        doneTodos,
        showModal,
        updateModalState: setShowModal,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}
