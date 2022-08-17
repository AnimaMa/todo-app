import React, { useEffect, useState } from "react";
import { deleteTodo, updateTodoState } from "../../ui/api/serverApi";
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
  const [isTodoDone, setIsTodoDone] = useState(isDone);
  const [removeFromList, setRemoveFromList] = useState(false);

  const deleteThisTodo = (id: string) => {
    setRemoveFromList(true);
    deleteTodo(_id);
  };
  const handleChange = (targetChecked: boolean) => {
    console.log(checked, isDone);
    setChecked(targetChecked);
    console.log(checked, targetChecked);
    setIsTodoDone(checked);
    if (isDone && checked) {
      setChecked(targetChecked);
      updateTodo(_id, targetChecked);
    }
    if (checked) {
      updateTodo(_id, isDone);
    } else {
      updateTodo(_id, !isDone);
    }
  };
  return (
    <li
      className={`  flex justify-between transition-all duration-500 ${
        removeFromList ? "hidden" : "flex "
      }`}
    >
      <div className="flex items-center">
        <InputWithLabel
          input={{
            className: `!w-4 h-4  !accent-violet-500 !focus:ring-red-500 !outline-none ${
              checked
                ? " shadow-lg checked:!bg-blue-600 !accent-violet-500 shadow-indigo-500/50"
                : "checked:bg-blue-600"
            }`,
            type: "checkbox",
            id: "checkInput",
            name: "checkInput",
            checked: checked || isTodoDone,
            onChange: (e) => {
              handleChange(e.target.checked);
            },
          }}
          label={{
            forName: "checkInput",
            label: text,
            className: `capitalize ${
              checked || isTodoDone ? "line-through text-opacity-70" : ""
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
          onClick={() => deleteThisTodo(_id)}
          title={"Delete"}
          className="!p-2 text-xs"
        />
      </div>
    </li>
  );
};
