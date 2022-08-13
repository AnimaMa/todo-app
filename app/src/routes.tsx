import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { IoCreateOutline } from "react-icons/io5";

export interface INavigationRoute {
  label: string;
  href: string;
  icon?: React.ReactElement;
}

export const navigationRoutes: INavigationRoute[] = [
  {
    label: "Home",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    label: "All Todos",
    href: "/todos",
    icon: <FcTodoList />,
  },
  {
    label: "Add todo",
    href: "/add-todo",
    icon: <IoCreateOutline />,
  },
];
