import React, { ChangeEvent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { INavigationRoute, navigationRoutes } from "../../../routes";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "../Modal/Modal";
import Button from "../../../ui/lib/atoms/Button/Button";

export interface IHeader {}
export interface HeaderProps extends IHeader {}
export const Header = (props: HeaderProps) => {
  const {} = props;
  const activeClass = "text-cyan-700 font-semibold";
  const [showModal, setShowModal] = useState(false);

  const showModalF = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <header className="relative w-40 bg-slate-100 bg-opacity-50  px-3 flex flex-col items-center justify-start py-20  gap-6 text-slate-900">
      {navigationRoutes.map((navroute: INavigationRoute, index: number) => (
        <span key={index}>
          {navroute.href === "/add-todo" ? (
            <Button
              variant="primary"
              title=""
              onClick={showModalF}
              className="!w-16 h-6 z-40 absolute bottom-16 !px-0  !py-8 flex items-center justify-center shadow-lg shadow-indigo-500/50 !bg-violet-500 !rounded-lg !rounded-tl-none"
            >
              <AiOutlinePlus className="text-white text-2xl" />
            </Button>
          ) : (
            <NavLink
              to={navroute.href}
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              <span className="inline-flex gap-3 items-center">
                {navroute.icon}
                {navroute.label}
              </span>
            </NavLink>
          )}
        </span>
      ))}

      <Modal
        className={`${
          showModal ? "block z-20 transition-all duration-200" : "hidden"
        }`}
      />
    </header>
  );
};
