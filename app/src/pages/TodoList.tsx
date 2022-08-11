import React from "react";
import { Layout } from "../components/shared/Layout";
import { TodoList } from "../components/TodoList/TodoList";

function TodoListPage() {
  return (
    <Layout>
      <h2>todolist page</h2>
      <TodoList />
    </Layout>
  );
}

export default TodoListPage;
