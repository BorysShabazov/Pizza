import { FC, useEffect, useState } from "react";
import { getPizza, item } from "../../../services/api";
import { ItemCard } from "../../../components/ItemCard/ItemCard";

export const Pizza: FC = () => {
  const [pizza, setPizza] = useState<item[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPizza();
        if (typeof data !== "string") {
          setPizza(data);
        }
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ul>
      {pizza.map((el) => (
        <li key={el.id}>
          <ItemCard
            name={el.name}
            price={el.price}
            ingredients={el.ingredients}
            imgUrl={el.imgUrl}
          />
        </li>
      ))}
    </ul>
  );
};
