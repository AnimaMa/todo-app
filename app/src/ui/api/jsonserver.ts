import axios from "axios";
import { ITodo } from "../../components/Todo/Todo";

// GET - /todos
// POST - /todos
// POST - /todo/:id/toggle
// DELETE - /todo/:id

export const jsonServerApi = axios.create({
  baseURL: "https://todo.kontentinoservices.dev",
});

export const getTodoList = async () => {
  const data = await jsonServerApi({
    method: "GET",
    url: "/todos",
  });
  return data.data.data;
};

export const getDoneTodos = async () => {
  const data = await jsonServerApi({
    method: "GET",
    url: "/todos",
    params: {
      filter: '[["isDone", "=", true]]',
    },
  });
  return data.data;
};

export const getTodo = async (id: string) => {
  const todo = await jsonServerApi({
    url: `/todos?_id=${id}`,
  }).then((json) => console.log(json.data));
  return todo;
};

export const createTodo = async (todo: ITodo) => {
  await jsonServerApi({
    method: "POST",
    url: "/todos",
    data: {
      text: todo.text,
    },
  })
    .then((request) => console.log(request.headers))
    .catch((error) => console.log(error));
};

export const updateTodoState = async (_id: string, isDone: boolean) => {
   await jsonServerApi({
    method: "POST",
    url: `/todo/${_id}/toggle`,
    data: {
      isDone: !isDone,
    },
  }).catch((error) => console.log(error));
};

export const deleteTodo = async (_id: string) => {
  const { data } = await jsonServerApi({
    method: "DELETE",
    url: `/todo/${_id}`,
    headers: {
      Accept: "***",
    },
  });

  return data;
};
