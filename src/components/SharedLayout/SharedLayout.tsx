import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout: FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);
