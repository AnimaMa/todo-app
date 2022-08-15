import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";

export interface INavigationRoute {
  label: string;
  href: string;
  icon?: React.ReactElement;
}

export const navigationRoutes: INavigationRoute[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <AiOutlineHome />,
  },
  {
    label: "All Todos",
    href: "/todos",
    icon: <BsListCheck />,
  },
  {
    label: "Add todo",
    href: "/add-todo",
    icon: <MdAddTask />,
  },
];
