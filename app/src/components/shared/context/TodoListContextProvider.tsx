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
    const getData = async () => {
      setLoading(true);
      try {
        const todoList = await getTodoList();
        setAllTodos(todoList);
      } catch (error: any) {
        if (error.response) {
          setLoading(false);
          setError(true);
        }
      }
      setLoading(false);
    };

    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, []);

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
  useEffect(() => {
    getDone(allTodos);
  }, [loading]);

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
