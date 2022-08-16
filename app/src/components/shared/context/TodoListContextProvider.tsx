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
  const [doneCount, setDoneCount] = useState(0);
  const [notDoneCount, setNotDoneCount] = useState(0);

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

          setDoneTodos([...doneTodos, filtered]);
          const doneTodosCount = filtered.length;
          setDoneCount(doneTodosCount);
          const notDone = allTodos.length - doneTodosCount;
          setNotDoneCount(notDone);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getDone(allTodos);
  }, [allTodos, allTodos.length, loading, doneTodos]);

  return (
    <TodoListContext.Provider
      value={{
        todos: allTodos,
        isLoading: loading,
        isError: error,
        doneTodos,
        showModal,
        updateModalState: setShowModal,
        doneCountTodos: doneCount,
        notDoneCountTodos: notDoneCount,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}
