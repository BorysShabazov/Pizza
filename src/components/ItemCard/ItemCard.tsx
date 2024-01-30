import { FC } from "react";
import { item } from "../../services/api";

export const ItemCard: FC<Omit<item, "id">> = ({
  name,
  price,
  imgUrl,
  ingredients,
}) => (
  <div>
    <img src={imgUrl} alt={name} />
    <div>
      <h3>{name}</h3>
      <span>{price}</span>
    </div>

    <p>{ingredients.join(" ")}</p>
  </div>
);
