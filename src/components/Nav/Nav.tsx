import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Nav: FC = () => (
  <nav>
    <ul className="flex justify-between center">
      <li>
        <NavLink to="/">catalog</NavLink>
      </li>
      <li>
        <NavLink to="cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);
