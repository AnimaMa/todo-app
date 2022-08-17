import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../shared/Container/Container";
import { IoChevronBackOutline } from "react-icons/io5";
import { Card } from "../shared/Card/Card";
type LocationState = {
  from: {
    path: string;
  };
  text: string;
  isDone: boolean;
};
const TodoView: React.FC = (props) => {
  const location = useLocation();
  const { from, text, isDone } = location.state as LocationState;
  console.log(from.path);
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate("/todos", { replace: true });
  };
  return (
    <Container>
      <div className="flex items-center py-4">
        <span
          className="text-2xl text-slate-200 hover:cursor-pointer "
          onClick={() => goToPreviousPage()}
        >
          <IoChevronBackOutline />
        </span>
        <h1 className="text-3xl mx-auto"> Task view</h1>
      </div>
      <Card className="mt-4 max-w-md mx-auto">
        <div className="flex justify-center text-2xl">
          <h2 className="mr-2 ">{text}</h2>
          is
          {isDone ? (
            <p className="text-green-600 font-normal ml-1">completed</p>
          ) : (
            <p className="text-red-600 font-normal ml-1">not completed</p>
          )}
        </div>
      </Card>
    </Container>
  );
};
export default TodoView;
