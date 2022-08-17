import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
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

const updateTodo = (id: string, isDone: boolean) => {
  updateTodoState(id, isDone);
};

export const Todo = (props: TodoProps) => {
  const { _id, text, isDone } = props;
  const [checked, setChecked] = useState(false);
  const [isTodoDone, setIsTodoDone] = useState(isDone);
  const [removeFromList, setRemoveFromList] = useState(false);

  const deleteThisTodo = (id: string) => {
    try {
      deleteTodo(_id);
      setRemoveFromList(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsTodoDone(isDone);
    setChecked(isDone);
  }, [isDone]);

  const handleChange = (targetChecked: boolean) => {
    if (checked) {
      setChecked(targetChecked);
      updateTodo(_id, !isDone);
      setIsTodoDone(false);
    }

    if (!checked) {
      setChecked(targetChecked);
      updateTodo(_id, !isDone);
      setIsTodoDone(false);
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
              console.log("Target is ", e.target.checked);
              handleChange(e.target.checked);
            },
          }}
          label={{
            forName: "checkInput",
            label: text,
            className: `normal-case ${
              checked ? "line-through text-opacity-70" : ""
            }`,
          }}
          formControlClassName="!flex-row !flex-row-reverse gap-x-3 gap-y-6 items-center"
        />
      </div>

      <div className="flex items-center gap-x-6">
        <Tag
          variant={checked ? "success" : "waiting"}
          label={checked ? "done" : "waiting"}
        />
        <Button variant="text" title={""} className="text-md">
          <Link to={"/todo"} state={{ text, isDone, from: "todo" }}>
            <AiOutlineEye className="text-md text-slate-700  " />
          </Link>
        </Button>

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
