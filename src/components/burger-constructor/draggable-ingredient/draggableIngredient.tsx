import styles from "../burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useRef, useState } from "react";
import {
  removeIngredientFromConstructor,
  reorderIngredient,
} from "../../../services/actions/burgerConstructor";
import { useDispatch, useSelector } from "../../../services/types/hooks";
import { useDrag, useDrop } from "react-dnd";

import { IDraggableIngredientProps, IDragItem } from "../../../services/types";
import { IIngredient } from "../../../services/types/data";

function DraggableIngredient({ ingredient }: IDraggableIngredientProps) {
  const [newIndex, setNewIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    (store) => store.burgerConstructor.constructorIngredients,
  );
  const index = constructorIngredients.findIndex(
    (ing: IIngredient) => ing.uniqueId === ingredient.uniqueId,
  );
  // Add event listener to the remove constructor ingredient button
  const removeIconRef = useRef<HTMLLIElement>(null);
  const [, drag] = useDrag({
    type: "ingredient",
    item: { type: "ingredient", ingredient: ingredient, index },
  });

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    hover(item: IDragItem, monitor) {
      setNewIndex(index);
    },
    drop(item: IDragItem, monitor) {
      const { index } = item;
      if (newIndex !== null) {
        dispatch(reorderIngredient(index, newIndex));
      }
    },
  });
  drag(dropTarget(removeIconRef));

  useEffect(() => {
    const handleRemoveClick = (event: any) => {
      const element = event.currentTarget.closest("[data-unique-id]");
      const uniqueId: string | undefined = element?.dataset.uniqueId;
      if (uniqueId !== undefined) {
        dispatch(removeIngredientFromConstructor(uniqueId));
      }
    };
    const wrapper = removeIconRef.current;
    const removeIcon =
      wrapper && wrapper.querySelector(".constructor-element__action");
    if (removeIcon) {
      removeIcon.addEventListener("click", handleRemoveClick);
    }
  }, [constructorIngredients, dispatch]);
  return (
    <li
      ref={removeIconRef}
      className={`${styles.ingredient} removable-ingredient pt-2 pr-2 pb-2 pl-4`}
      key={ingredient.uniqueId}
      data-unique-id={ingredient.uniqueId}
    >
      <div className="pr-2">
        <DragIcon type={"primary"} />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </li>
  );
}

export default DraggableIngredient;
