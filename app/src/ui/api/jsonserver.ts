import axios from "axios";
import { Todo } from "../../components/Todo/Todo";

const jsonServerApi = axios.create({
  baseURL: "http://localhost:4200",
});

export const createTodo = async (todo: Todo) => {
  const { data } = await jsonServerApi({
    method: "POST",
    url: "/todos",
    data: todo,
  });

  return data;
};

// export const deleteTodo = async (id: num) => {
//   const { data } = await jsonServerApi({
//     method: "POST",
//     url: "/todos",
//     data: todo,
//   });

//   return data;
// };
