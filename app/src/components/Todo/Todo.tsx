import React, { useState } from "react";
import { deleteTodo, updateTodoState } from "../../ui/api/jsonserver";
import Button from "../../ui/lib/atoms/Button/Button";
import { Tag } from "../../ui/lib/atoms/Tag/Tag";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";

export interface ITodo {
  _id: string;
  text: string;
  isDone: boolean;
}
export interface TodoProps extends ITodo {}

// const showTodo = (id: string) => {
//   getTodo(id);
// };

const updateTodo = (id: string, isDone: boolean) => {
  updateTodoState(id, isDone);
};

export const Todo = (props: TodoProps) => {
  const { _id, text, isDone } = props;
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="flex items-center ">
        <InputWithLabel
          input={{
            className: `!w-4 h-4  !accent-violet-500 !focus:ring-red-500 !outline-none ${
              checked || isDone
                ? "   !bg-red-400 shadow-lg checked:!bg-blue-600 !accent-violet-500 shadow-indigo-500/50"
                : "checked:bg-blue-600"
            }`,
            type: "checkbox",
            id: "checkInput",
            name: "checkInput",
            checked: isDone,
            onChange: () => {
              setChecked(!checked);
            },
            onClick: () => updateTodo(_id, !isDone),
          }}
          label={{
            forName: "checkInput",
            label: text,
            className: `capitalize ${
              isDone || checked ? "line-through text-opacity-70" : ""
            }`,
          }}
          formControlClassName="!flex-row !flex-row-reverse gap-x-3 gap-y-6 items-center"
        />
      </div>

      <div className="flex items-center gap-x-6">
        <Tag
          variant={isDone ? "success" : "waiting"}
          label={isDone ? "done" : "waiting"}
        />

        {/* <Button variant="text" title={""} className="text-md">
          <a
            href={`http://localhost:4200/todos/${_id}`}
            onClick={() => showTodo(_id)}
          >
            <AiOutlineEye className="text-md text-slate-700  " />
          </a>
        </Button> */}

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
