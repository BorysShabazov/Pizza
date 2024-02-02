import { FC } from "react";
import { Btn } from "../Btn/Btn";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/AuthSlice";

interface IProps {
  email: string;
}

export const UserNav: FC<IProps> = ({ email }) => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center gap-[20px]">
      <span>{email}</span>
      <Btn onClick={logoutHandle} content="logout" />
    </div>
  );
};
