import React, { useEffect, useState } from "react";
import Button from "../../ui/lib/atoms/Button/Button";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";
import { TodoProps } from "./Todo";
import { nanoid } from "nanoid";
import { createTodo } from "../../ui/api/jsonserver";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineError } from "react-icons/md";
import Alert from "../../ui/lib/atoms/Alert/Alert";
import { Spinner } from "../../ui/lib/atoms/Spinner/Spinner";

export const AddTodo = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TodoProps>();
  const [created, setCreated] = useState(false);
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
    setLoading(true);

    if (todo) {
      try {
        createTodo(todo).then((response) => setCreated(true));
      } catch (error) {
        setError(true);
      }
    }
    todoInput.current.value = "";
    setTask("");
    setLoading(false);
    setCreated(false);
  };

  return (
    <section className="section--todo-add flex justify-center items-center flex-col gap-y-4">
      {loading && <Spinner fillColor="fill-green-400" />}
      {error && (
        <Alert variant="error">
          <MdOutlineError />
          something went wrong
        </Alert>
      )}
      <form
        method=""
        onSubmit={(e) => {
          if (task) handleClick(e);
        }}
      >
        <div className="flex items-end content-center gap-4">
          <InputWithLabel
            input={{
              type: "text",
              name: "todo",
              id: "todo",
              innerRef: todoInput,
              onChange: (e) => {
                setTask(e.target.value);
                setCreated(false);
              },
            }}
            label={{
              forName: "todo",
              label: "Todo add",
            }}
          />
          <Button
            type="submit"
            title={"Add todo"}
            variant={"primary"}
            className={`${task === "" ? "cursor-not-allowed opacity-50 " : ""}`}
            disabled={task === "" ? true : false}
          />
        </div>
      </form>
      <div className="flex">
        {created && (
          <Alert variant="success">
            <AiFillCheckCircle className="fill-green-300 text-3xl mr-3 inline-block " />
            <span>Task has been created</span>
          </Alert>
        )}
      </div>
    </section>
  );
};
