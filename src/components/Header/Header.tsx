import { FC } from "react";
import { Nav } from "../Nav/Nav";
import { AuthNav } from "../AuthNav/AuthNav";

export const Header: FC = () => (
  <header className="border-b-[1px] ">
    <ul className="container flex justify-between items-center">
      <li>
        <Nav />
      </li>
      <li>
        <AuthNav />
      </li>
    </ul>
  </header>
);
