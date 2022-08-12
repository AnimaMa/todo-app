import axios from "axios";
import React from "react";
import { apiUrl } from "../../api/api";
import Button from "../../ui/lib/atoms/Button/Button";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";

export interface TodoProps {
  _id: string;
  text: string;
  isDone: boolean;
}

const deleteTodo = async (id: string) => {
  console.log(id);
  try {
    await axios
      .delete(`${apiUrl}/todos/${id}`)
      .then((json) => console.log(json.data))
      .then((response) => console.log(response));
  } catch (error) {
    // .catch((err) => {
    console.log(error);
    // });
  }
};
const da = {
  isDone: true,
};

const editTodo = (id: string) => {
  const m = decodeURIComponent(id);
  console.log("id", id);

  console.log("m", m);
  axios
    .patch(`${apiUrl}/todo/${id}`, {
      method: "PATCH",
      body: da,
    })
    .then((json) => console.log(json))
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err.message);
    });
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
        <Button
          variant="secondary"
          onClick={() => deleteTodo(_id)}
          title={"Delete"}
          className="!p-2 text-xs"
        />
      </div>
    </>
  );
};
