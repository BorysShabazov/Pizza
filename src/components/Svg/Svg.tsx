import { FC } from "react";
import sprite from "../../assets/sprite.svg";

interface ISvg {
  id: string;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  className?: string;
  classNameSvg?: string;
  onClick?: () => void;
}

export const Svg: FC<ISvg> = ({
  id,
  height,
  width,
  fill,
  stroke,
  className = "",
  onClick,
  classNameSvg = "",
}) => {
  return (
    <div onClick={onClick} className={className}>
      <svg
        className={classNameSvg}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
      >
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};
