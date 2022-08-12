import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoList";
import { Todo } from "./components/Todo/Todo";
import TodoPage from "./pages/TodoPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoListPage />}>
          <Route path=":todoid" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
