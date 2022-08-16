import React from "react";
import { ITodo } from "../../Todo/Todo";

interface TodoListContextProps {
  todos: ITodo[];
  isLoading: boolean;
  isError: boolean;
  doneTodos: ITodo[];
  showModal: boolean;
  updateModalState: (showModal: boolean) => void;
  doneCountTodos: number;
  notDoneCountTodos: number;
}

export const TodoListContext =
  React.createContext<TodoListContextProps | undefined>(undefined);
