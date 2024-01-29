import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Home: FC = () => (
  <div className="container h-[400px] flex items-center justify-center">
    <NavLink
      to="menu/pizza"
      className="border-[1px] py-[8px] px-[16px] rounded-lg"
    >
      Зробити замовлення
    </NavLink>
  </div>
);
