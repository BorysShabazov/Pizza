import { FC } from "react";
import { NavLink } from "react-router-dom";

export const AuthNav: FC = () => (
  <>
    <ul className="flex gap-[20px] items-center">
      <li>
        <NavLink to="/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
    </ul>
  </>
);
