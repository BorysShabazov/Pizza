import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Nav: FC = () => (
  <nav className="flex gap-[80px]">
    <Logo />
    <ul className="flex gap-[20px] items-center">
      <li>
        <NavLink to="/">menu</NavLink>
      </li>
      <li>
        <NavLink to="cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);
