import React, { useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import Button from "../../ui/lib/atoms/Button/Button";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";
import { TodoProps } from "./Todo";
import { nanoid } from "nanoid";

export interface AddTodoProps {}

export const AddTodo = (props: AddTodoProps) => {
  const {} = props;
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TodoProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const todoInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (task) {
      const createId = nanoid(8);
      setTodo({ _id: createId, text: task, isDone: false });
    }
  }, [task]);

  const handleClick = (e: any) => {
    e.preventDefault();
    const parsed = JSON.stringify(todo);
    setLoading(true);
    console.log(todo);

    fetch(`${apiUrl}/todos`, {
      method: "POST",
      body: parsed,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => console.log(response))
      .then(() => setLoading(false))
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });

    todoInput.current.value = "";
  };

  return (
    <section className="section--todo-add flex justify-center">
      {loading && <p>LOADING</p>}
      {error && <p className="text-red-600">something went wrong</p>}
      <form method="" onSubmit={(e) => handleClick(e)}>
        <div className="flex items-end content-center gap-4">
          <InputWithLabel
            input={{
              type: "text",
              name: "todo",
              id: "todo",
              innerRef: todoInput,
              onChange: (e) => setTask(e.target.value),
            }}
            label={{
              forName: "todo",
              label: "Todo add",
            }}
          />
          <Button type="submit" title={"Add todo"} variant={"primary"} />
        </div>
      </form>
    </section>
  );
};
