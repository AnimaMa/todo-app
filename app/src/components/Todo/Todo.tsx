import axios from "axios";
import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import Button from "../../ui/lib/atoms/Button/Button";
import { Input } from "../../ui/lib/atoms/Input/Input";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";

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
      <div className="flex items-center mr-4">
        <InputWithLabel
          input={{
            className:
              "w-4 h-4 !accent-violet-500 !focus:ring-red-500 !outline-none ",
            type: "checkbox",
            id: "checkInput",
            name: "checkInput",
          }}
          label={{
            forName: "checkInput",
            label: text,
            className: "capitalize",
          }}
          formControlClassName="!flex-row !flex-row-reverse gap-6 items-center"
        />
      </div>

      <div>
        <Tag
          variant={isDone ? "success" : "waiting"}
          label={isDone ? "done" : "waiting"}
        />
        <Button
          variant="text"
          onClick={() => editTodo(_id)}
          title={""}
          className="text-md"
        >
          <MdOutlineEditNote className="text-md text-slate-700  " />
        </Button>
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
