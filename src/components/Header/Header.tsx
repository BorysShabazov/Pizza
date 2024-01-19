import { FC } from "react";
import { Nav } from "../Nav/Nav";
import { AuthNav } from "../AuthNav/AuthNav";

export const Header: FC = () => (
  <header className="container flex justify-between center">
    <Nav />
    <AuthNav />
  </header>
);
