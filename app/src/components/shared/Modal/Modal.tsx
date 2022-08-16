import React, { useContext } from "react";
import { AddTodo } from "../../Todo/AddTodo";
import { MdClose } from "react-icons/md";
import Button from "../../../ui/lib/atoms/Button/Button";
import { TodoListContext } from "../context/TodoListContext";
export interface ModalProps {
  className?: string;
}

export const Modal = (props: ModalProps) => {
  const { className } = props;
  const todoContext = useContext(TodoListContext);
  return (
    <section className={className}>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex={-1}
        className={`${
          todoContext?.showModal ? "block" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-black bg-opacity-40`}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-xl">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b  ">
              <h3 className="text-xl font-semibold text-slate-800">
                Add a task
              </h3>
              <Button
                variant="text"
                title=""
                onClick={() => todoContext?.updateModalState(false)}
              >
                <MdClose className="text-slate-500 text-2xl" />
              </Button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
