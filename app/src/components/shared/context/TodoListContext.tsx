import React from "react";
import { ITodo } from "../../Todo/Todo";

interface TodoListContextProps {
  todos: ITodo[];
  isLoading: boolean;
  isError: boolean;
}

export const TodoListContext =
  React.createContext<TodoListContextProps | undefined>(undefined);
