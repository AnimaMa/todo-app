import React, { useEffect } from "react";
import { apiUrl } from "../../api/api";
import Button from "../../ui/lib/atoms/Button/Button";
import { InputWithLabel } from "../../ui/lib/molecules/InputWithLabel/InputWithLabel";

export interface AddTodoProps {}

export const AddTodo = (props: AddTodoProps) => {
  const {} = props;
  //   useEffect(() => {
  //     fetch(`${apiUrl}/todos`, {
  //       method: "GET",
  //     })
  //       .then((response) => JSON.stringify(response))
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <section className="section--todo-add flex justify-center">
      <div className="flex items-end content-center gap-4">
        <InputWithLabel
          input={{ type: "text", name: "todo", id: "todo" }}
          label={{
            forName: "todo",
            label: "Todo add",
          }}
        />
        <Button title={"Add todo"} variant={"primary"} />
      </div>
    </section>
  );
};
