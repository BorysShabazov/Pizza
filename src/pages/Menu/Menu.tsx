import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MenuNav } from "../../components/MenuNav/MenuNav";

export const Menu: FC = () => (
  <div className="container flex gap-[16px]">
    <MenuNav />
    <Outlet />
  </div>
);
