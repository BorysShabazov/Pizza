import { FC } from "react";
import { NavLink } from "react-router-dom";

const menu: string[] = ["pizza", "burgers", "drinks"];

export const MenuNav: FC = () => (
  <ul>
    {menu.map((el) => (
      <li key={el}>
        <NavLink
          to={el}
          className="block py-[8px] px-[16px] rounded-lg text-center hover:bg-blue focus:bg-blue "
        >
          {el}
        </NavLink>
      </li>
    ))}
  </ul>
);
