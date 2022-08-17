import axios from "axios";
import { ITodo } from "../../components/Todo/Todo";

// GET - /todos
// POST - /todos
// POST - /todo/:id/toggle
// DELETE - /todo/:id

export const serverApi = axios.create({
  baseURL: "https://todo.kontentinoservices.dev",
});

export const getTodoList = async () => {
  const data = await serverApi({
    method: "GET",
    url: "/todos",
  });
  return data.data.data;
};

export const getDoneTodos = async () => {
  const data = await serverApi({
    method: "GET",
    url: "/todos",
    params: {
      filter: '[["isDone", "=", true]]',
    },
  });
  return data.data;
};

export const createTodo = async (todo: ITodo) => {
  await serverApi({
    method: "POST",
    url: "/todos",
    data: {
      text: todo.text,
    },
  }).catch((error) => {
    return error;
  });
};

export const updateTodoState = async (_id: string, isDone: boolean) => {
  await serverApi({
    method: "POST",
    url: `/todo/${_id}/toggle`,
    data: {
      isDone: !isDone,
    },
  }).catch((error) => console.log(error));
};

export const deleteTodo = async (_id: string) => {
  const { data } = await serverApi({
    method: "DELETE",
    url: `/todo/${_id}`,
    headers: {
      Accept: "***",
    },
  });

  return data;
};
