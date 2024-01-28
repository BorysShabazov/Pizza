import { FC } from "react";

const menu: string[] = ["Pizza", "Burger", "Drink"];

export const Home: FC = () => (
  <div className="flex">
    <ul>
      {menu.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
    <ul>
      <li>Pizza</li>
    </ul>
  </div>
);
