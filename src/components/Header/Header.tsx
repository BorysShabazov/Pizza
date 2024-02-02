import { FC } from "react";
import { Nav } from "../Nav/Nav";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserNav } from "../UserNav/UserNav";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Auth/selectors";

export interface IUser {
  email: string;
}

export const Header: FC = () => {
  const user = useSelector(getUser);

  return (
    <header className="border-b-[1px] border-gray fixed bg-white w-[100%]">
      <ul className="container flex justify-between items-center">
        <li>
          <Nav />
        </li>
        <li>{user.email ? <UserNav email={user.email} /> : <AuthNav />}</li>
      </ul>
    </header>
  );
};
