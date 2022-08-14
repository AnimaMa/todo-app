import React from "react";
import { Link, NavLink } from "react-router-dom";
import { INavigationRoute, navigationRoutes } from "../../../routes";

export interface IHeader {}
export interface HeaderProps extends IHeader {}
export const Header = (props: HeaderProps) => {
  const {} = props;
  const activeClass = "text-cyan-700 font-semibold";

  return (
    <header className="w-72 bg-slate-100  px-3 flex flex-col items-center justify-start py-20  gap-6 text-slate-900">
      {navigationRoutes.map((navroute: INavigationRoute, index: number) => (
        <span key={index}>
          <NavLink
            to={navroute.href}
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            <span className="inline-flex gap-3 items-center">
              {navroute.icon}
              {navroute.label}
            </span>
          </NavLink>
        </span>
      ))}
    </header>
  );
};
