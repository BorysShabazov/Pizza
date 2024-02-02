import { FC, MouseEvent } from "react";

interface IProps {
  content: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Btn: FC<IProps> = ({ content, onClick }) => (
  <button
    className="border-[1px] border-blue rounded-lg px-[8px] py-[4px]"
    onClick={onClick}
  >
    {content}
  </button>
);
