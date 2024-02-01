import { FC, useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { AuthNav } from "../AuthNav/AuthNav";

interface IUser {
  email: string;
}

export const Header: FC = () => {
  const [user, setUser] = useState<IUser>({ email: "" });
  useEffect(() => {
    const getUser = localStorage.getItem("user");

    if (getUser !== null) {
      setUser(JSON.parse(getUser));
    } else {
      console.log("Значення не знайдено в localStorage");
    }
  }, []);
  return (
    <header className="border-b-[1px] ">
      <ul className="container flex justify-between items-center">
        <li>
          <Nav />
        </li>
        <li>{user.email ? user.email : <AuthNav />}</li>
      </ul>
    </header>
  );
};
