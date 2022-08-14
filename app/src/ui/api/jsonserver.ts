import axios from "axios";
import { ITodo } from "../../components/Todo/Todo";

// https://todo.kontentinoservices.dev/
const jsonServerApi = axios.create({
  baseURL: "http://localhost:4200/",
});

export const getTodoList = async () => {
  const { data } = await jsonServerApi({
    method: "GET",
    url: "/todos",
  });
  console.log(data);

  return data;
};

export const createTodo = async (todo: ITodo) => {
  await jsonServerApi({
    method: "POST",
    url: "/todos",
    data: todo,
  })
    .then((request) => console.log(request.headers))
    .catch((error) => console.log(error));

  // return data;
};

// export const updateTodo = async (id: string) => {
//   await jsonServerApi({
//     method: "PATCH",
//     url: `/todos/4443`,
//     data: {
//       isDone: true,
//       text: "4443 id je ",
//     },
//   })
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// };

// export const updateTodo = async (todo: ITodo, id: string) => {
//   initMongo();

//   await jsonServerApi({
//     method: "PATCH",
//     url: `/todos?_id=${id}`,
//     data: { isDone: true, _id: id },
//   })
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// };

// // export const deleteTodo = async (id: num) => {
// //   const { data } = await jsonServerApi({
// //     method: "POST",
// //     url: "/todos",
// //     data: todo,
// //   });

// //   return data;
// // };
