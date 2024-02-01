import { FC } from "react";
import { NavLink } from "react-router-dom";

const menu: string[] = ["pizza", "burgers", "drinks"];

export const MenuNav: FC = () => (
  <ul className="flex flex-col gap-[16px] py-[16px]">
    {menu.map((el) => (
      <li key={el}>
        <NavLink
          to={el}
          className="bg-lightgray  block py-[8px] px-[16px] rounded-lg text-center hover:bg-gray focus:bg-gray "
        >
          {el}
        </NavLink>
      </li>
    ))}
  </ul>
);
