import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { getTodo, updateTodoState } from "../../ui/api/jsonserver";
import Button from "../../ui/lib/atoms/Button/Button";
import { Input } from "../../ui/lib/atoms/Input/Input";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";

export interface ITodo {
  id: string;
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

const showTodo = (id: string) => {
  getTodo(id);
};

const updateTodo = (id: string, isDone: boolean) => {
  updateTodoState(id, isDone);
};

export const Todo = (props: TodoProps) => {
  const { id, text, isDone } = props;
  const [checked, setChecked] = useState(false);

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
            checked: isDone,
            onChange: () => {
              setChecked(!checked);
            },
          }}
          label={{
            forName: "checkInput",
            label: text,
            className: "capitalize",
          }}
          formControlClassName="!flex-row !flex-row-reverse gap-6 items-center"
        />
      </div>

      <div className="flex items-center">
        <Tag
          variant={isDone ? "success" : "waiting"}
          label={isDone ? "done" : "waiting"}
        />

        <Button
          variant="text"
          onClick={() => updateTodo(id, isDone)}
          title={""}
          className="text-md"
        >
          <MdOutlineEditNote className="text-md text-slate-700  " />
        </Button>

        <Button variant="text" title={""} className="text-md">
          <a
            href={`http://localhost:4200/todos/${id}`}
            onClick={() => showTodo(id)}
          >
            <AiOutlineEye className="text-md text-slate-700  " />
          </a>
        </Button>

        {/* <Button
          variant="secondary"
          onClick={() => deleteTodo(id)}
          title={"Delete"}
          className="!p-2 text-xs"
        /> */}
      </div>
    </>
  );
};
