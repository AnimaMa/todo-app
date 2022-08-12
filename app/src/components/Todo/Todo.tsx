import React from "react";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";

export interface TodoProps {
  _id: string;
  text: string;
  isDone: boolean;
}

export const Todo = (props: TodoProps) => {
  const { _id, text, isDone } = props;
  return (
    <>
      <p className="text-slate-600 capitalize">{text}</p>

      <Tag
        variant={isDone ? "success" : "waiting"}
        label={isDone ? "done" : "waiting"}
      />
    </>
  );
};
