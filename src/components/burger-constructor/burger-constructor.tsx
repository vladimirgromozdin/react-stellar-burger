import React, { useCallback, useMemo, useState } from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "../burger-constructor/burger-constructor.module.css";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { getOrderDetails } from "../../services/actions/orderDetails";
import { useDrop } from "react-dnd";
import {
  addIngredientToConstructor,
  reorderIngredient,
} from "../../services/actions/burgerConstructor";
import DraggableIngredient from "./draggable-ingredient/draggableIngredient";
import { useNavigate } from "react-router-dom";
import { IDragItem } from "../../services/types";
import { IIngredient } from "../../services/types/data";

function BurgerConstructor() {
  const user = useSelector((state) => state.checkAuth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moveIngredient = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(reorderIngredient(dragIndex, hoverIndex));
    },
    [dispatch],
  );
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: IDragItem, monitor) {
      onDropHandler(item);
    },
  });

  const onDropHandler = (item: IDragItem) => {
    const { ingredient } = item;
    const isIngredientPresent = constructorIngredients.find(
      (ing: IIngredient) => ing.uniqueId === ingredient.uniqueId,
    );
    if (!isIngredientPresent) {
      dispatch(addIngredientToConstructor(ingredient));
    }
  };

  const constructorIngredients = useSelector(
    (state) => state.burgerConstructor.constructorIngredients,
  );
  const { ingredientsIds, ingredientsTotal } = useMemo(() => {
    const ids: string[] = constructorIngredients.map(
      (ingredient: IIngredient) => ingredient._id,
    );
    const total: number =
      constructorIngredients.length > 0
        ? constructorIngredients.reduce(
            (acc: number, currentItem: IIngredient) => acc + currentItem.price,
            0,
          )
        : 0;
    return { ingredientsIds: ids, ingredientsTotal: total };
  }, [constructorIngredients]);

  const handleSendOrder = useCallback(() => {
    dispatch(getOrderDetails(ingredientsIds, user, navigate));
  }, [dispatch, ingredientsIds]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (): void => {
    handleSendOrder();
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  // Check if ingredientsList is defined and not empty
  const hasIngredients =
    constructorIngredients && constructorIngredients.length > 0;
  // Finding the bun in the state
  const bun = constructorIngredients.find(
    (ingredient: IIngredient) => ingredient.type === "bun",
  );
  // Get the total cost of ingredients

  return (
    <section ref={dropTarget} className={`${styles.burgerConstructor} pt-25`}>
      <ul className={styles.ingredientsList}>
        {hasIngredients && bun && (
          <>
            <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          </>
        )}

        <div
          className={`${styles.variableIngredientsList} custom-scroll removable-ingredients`}
        >
          {constructorIngredients
            .filter((ingredient: IIngredient) => ingredient.type !== "bun")
            .map((ingredient: IIngredient, index: number) => {
              return (
                <DraggableIngredient
                  key={ingredient.uniqueId}
                  id={ingredient._id}
                  ingredient={ingredient}
                  moveIngredient={moveIngredient}
                />
              );
            })}
        </div>

        {hasIngredients && bun && (
          <>
            <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          </>
        )}
      </ul>
      <div className={`${styles.total} pt-8`}>
        <div className={`${styles.price} pr-10`}>
          <h4 className="text text_type_digits-medium pr-2">
            {ingredientsTotal}
          </h4>
          <CurrencyIcon type={"primary"} />
        </div>
        <Button
          htmlType={"button"}
          type={"primary"}
          size={"medium"}
          onClick={handleOrderClick}
        >
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
