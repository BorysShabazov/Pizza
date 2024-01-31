import { FC } from "react";
import { item } from "../../services/api";

export const ItemCard: FC<Omit<item, "id">> = ({
  name,
  price,
  imgUrl,
  ingredients,
}) => (
  <button className="flex flex-col  w-[210px] h-[100%] border-[1px] border-gray rounded-b-xl hover:border-black">
    <img src={imgUrl} alt={name} className="h-[210px]" />
    <div className="flex flex-col  text-center  p-[8px]">
      <h3>{name}</h3>
      <span>&#x24; {price}</span>

      <p>{ingredients.join(" ")}</p>
    </div>
  </button>
);
