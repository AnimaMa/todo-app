import axios from "axios";
import React from "react";
import Button from "../../ui/lib/atoms/Button/Button";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";

export interface ITodo {
  _id: string;
  text: string;
  isDone: boolean;
}

export interface TodoProps extends ITodo {}

// const deleteTodo = async (id: string) => {
//   console.log(id);
//   try {
//     await axios
//       .delete(`/todos/${id}`)
//       .then((json) => console.log(json.data))
//       .then((response) => console.log(response));
//   } catch (error) {
//     // .catch((err) => {
//     console.log(error);
//     // });
//   }
// };

const da = {
  isDone: true,
};

const editTodo = async (id: string) => {
  try {
    await axios
      .patch(`/todos/${id}`, {
        isDone: true,
        _id: id,
      })
      .then((json) => console.log(json))
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};

export const Todo = (props: TodoProps) => {
  const { _id, text, isDone } = props;
  return (
    <>
      <p className="text-slate-600 capitalize">{text}</p>
      {_id}
      <div>
        <Tag
          variant={isDone ? "success" : "waiting"}
          label={isDone ? "done" : "waiting"}
        />
        <Button
          variant="primary"
          onClick={() => editTodo(_id)}
          title={"Edit"}
          className="!p-2 text-xs"
        />
        {/* <Button
          variant="secondary"
          onClick={() => deleteTodo(_id)}
          title={"Delete"}
          className="!p-2 text-xs"
        /> */}
      </div>
    </>
  );
};
