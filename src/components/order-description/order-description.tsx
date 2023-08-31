import React, { useEffect } from "react";
import styles from "../order-description/order-description.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { useParams } from "react-router-dom";
import { fetchOrderDetails } from "../../services/actions/orderDescription";
import { getIngredients } from "../../services/actions/burgerIngredients";
import { TOrderDescriptionProps } from "../../services/types";
import { IIngredient, IOrder } from "../../services/types/data";

function OrderDescription(props: TOrderDescriptionProps) {
  const { isModal = false } = props;
  const isOrderDataReady = useSelector(
    (state) => state.orderDescription.getOrderDescriptionDone,
  );
  const orderStatusMapping = {
    done: "Выполнен",
    created: "Создан",
    pending: "Готовится",
  };
  const dispatch = useDispatch();
  const { orderNumber } = useParams();
  useEffect(() => {
    dispatch(getIngredients());
    if (orderNumber) {
      dispatch(fetchOrderDetails(Number(orderNumber)));
    }
  }, [dispatch, orderNumber]);
  const countIngredients = (order: IOrder | null) => {
    if (order) {
      return order.ingredients.reduce<Record<string, number>>(
        (acc, ingredientId) => {
          acc[ingredientId] = (acc[ingredientId] || 0) + 1;
          return acc;
        },
        {},
      );
    }
  };
  const order = useSelector((store) => store.orderDescription.order);
  const allIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients,
  );
  const uniqueIngredientIds = new Set(order ? order.ingredients : []);
  const uniqueIngredientList = Array.from(uniqueIngredientIds).map((id) =>
    allIngredients.find((ing: IIngredient) => ing._id === id),
  );
  const ingredientsWithQuantity = countIngredients(order);
  console.log(ingredientsWithQuantity);
  if (!isOrderDataReady || !order) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={
        isModal ? `${styles.orderContainerModal}` : `${styles.orderContainer}`
      }
    >
      <div className={styles.orderDescriptionContent}>
        <p
          className={` ${styles.orderNumber} text text_type_digits-default pb-10`}
        >
          #{orderNumber}
        </p>
        <h2 className={`text text_type_main-medium pb-3`}>{order.name}</h2>
        <p
          className={` ${styles.orderStatus} text text_type_main-default pb-15`}
        >
          {orderStatusMapping[order.status] || order.status}
        </p>
        <p className="text text_type_main-medium pb-6">Состав:</p>
        <ul className={`${styles.ingredientsList} custom-scroll`}>
          {uniqueIngredientList.map(
            (ingredient: IIngredient | undefined, index: number) => {
              if (!ingredient || !ingredientsWithQuantity) return null;
              const ingredientQuantity =
                ingredient.type === "bun"
                  ? 1
                  : ingredientsWithQuantity[ingredient._id] || 0;
              return (
                <li key={index} className={styles.ingredient}>
                  <div className={styles.ingredientWrapper}>
                    <div className={styles.ingredientBorder}>
                      <img
                        className={styles.ingredientImage}
                        src={ingredient.image_mobile}
                        alt={ingredient.name}
                      />
                    </div>
                    <p
                      className={`${styles.ingredientName} text text_type_main-default pl-4`}
                    >
                      {ingredient.name}
                    </p>
                  </div>
                  <div className={styles.ingredientPrice}>
                    <p className="text text_type_digits-default pr-2">
                      {ingredient.price} × {ingredientQuantity}
                    </p>
                    <CurrencyIcon type={"primary"} />
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
}

export default OrderDescription;
