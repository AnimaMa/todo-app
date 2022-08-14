import axios from "axios";
import { ITodo } from "../../components/Todo/Todo";

// https://todo.kontentinoservices.dev/
// http://localhost:4200
const jsonServerApi = axios.create({
  baseURL: "http://localhost:4200",
});

export const getTodoList = async () => {
  const { data } = await jsonServerApi({
    method: "GET",
    url: "/todos",
  });
  console.log(data);

  return data;
};

export const getDoneTodos = async () => {
  const data = await jsonServerApi({
    method: "GET",
    url: "/todos?isDone=true",
  });
  return data.data;
};

export const getNotDoneTodos = async () => {
  const data = await jsonServerApi({
    method: "GET",
    url: "/todos?isDone=false",
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
      _id: 2,
      text: todo.text,
      isDone: true,
      id: 444,
    },
  })
    .then((request) => console.log(request.headers))
    .catch((error) => console.log(error));

  // return data;
};
export const updateTodoState = async (id: string, isDone: boolean) => {
  console.log(id);
  await jsonServerApi({
    method: "patch",
    url: `/todos/${id}`,
    data: {
      isDone: !isDone,
    },
    params: id,
  }).catch((error) => console.log(error));
};

// export const updateTodo = async (id: string) => {
//   await jsonServerApi({
//     method: "PATCH",
//     url: `/todos/${id}`,
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
