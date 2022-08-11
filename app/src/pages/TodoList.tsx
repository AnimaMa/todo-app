import React from "react";
import { Layout } from "../components/shared/Layout";
import { TodoList } from "../components/TodoList/TodoList";

function TodoListPage() {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
}

export default TodoListPage;
