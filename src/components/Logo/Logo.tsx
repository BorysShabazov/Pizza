import { FC } from "react";
import { Svg } from "../Svg/Svg";
import { NavLink } from "react-router-dom";

export const Logo: FC = () => (
  <div className="py-[8px]">
    <NavLink to="/">
      <Svg id="icon-logo" width={32} height={32} />
    </NavLink>
  </div>
);
