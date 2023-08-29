import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "../ingredient/ingredient.module.css";
import { useSelector } from "../../../services/types/hooks";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TIngredientProps } from "../../../services/types";
import { IIngredient } from "../../../services/types/data";

function Ingredient({ ingredient }: TIngredientProps) {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient },
  });
  const ingredientsList = useSelector(
    (store) => store.burgerConstructor.constructorIngredients,
  );
  const ingredientCounter: number = ingredientsList.filter(
    (item: IIngredient) => item._id === ingredient._id,
  ).length;
  const ingredientAdded = ingredientCounter > 0;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <IngredientDetails onClose={handleModalClose} />
        </Modal>
      )}
      <Link
        className={styles.link}
        to={`/ingredients/${ingredient._id}`}
        state={{ background: location }}
      >
        <li
          ref={dragRef}
          key={ingredient._id}
          className={`${styles.ingredient} pl-8 pt-6`}
        >
          <div className={styles.imageWithCounter}>
            {ingredientAdded && (
              <Counter count={ingredientCounter} size="small" />
            )}
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
          <div className={`${styles.price} pt-1 pb-1`}>
            <p className="text text_type_digits-default pr-2">
              {ingredient.price}
            </p>
            <CurrencyIcon type={"primary"} />
          </div>
          <div
            className={`${styles.ingredientName} text text_type_main-default`}
          >
            {ingredient.name}
          </div>
        </li>
      </Link>
    </>
  );
}

export default Ingredient;
