import DishItem from "./DishItem.tsx";
import * as React from "react";
import { IDish } from "../../types";


interface Props {
  dishes: IDish[];
  addToCard: (dish: IDish) => void;
}

const Dishes: React.FC<Props> = ({ dishes, addToCard }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} onItemClick={addToCard} />
      ))}
    </>
  );
};

export default Dishes;
