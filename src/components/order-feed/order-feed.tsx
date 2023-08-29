import React, { useEffect } from "react";
import styles from "../order-feed/order-feed.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { Link, useLocation } from "react-router-dom";
import { TOrderFeedProps } from "../../services/types";
import { IIngredient, IOrder } from "../../services/types/data";

function OrderFeed({ feedPersonal, wsUrl }: TOrderFeedProps) {
  const className = feedPersonal ? styles.feedPersonal : styles.feedGeneral;
  const dispatch = useDispatch();
  const orders: IOrder[] = useSelector((store) => store.ws.orders);
  const sortedOrders = feedPersonal ? [...orders].reverse() : orders;
  const allIngredients = useSelector(
    (store) => store.burgerIngredients.ingredients,
  );
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "WS_CONNECTION_START", payload: { wsUrl } });
    return () => {
      dispatch({ type: "WS_CONNECTION_CLOSED" });
    };
  }, [dispatch, wsUrl]);

  return (
    <div className={`${className} custom-scroll`}>
      {sortedOrders.map((order: IOrder, index: number) => {
        const ingredients: (IIngredient | null)[] = order.ingredients.map(
          (ingredientId: string) => {
            const ingredientData = allIngredients.find(
              (ingredient: IIngredient) => ingredient._id === ingredientId,
            );
            return ingredientData ? ingredientData : null;
          },
        );
        const totalPrice: number = ingredients.reduce(
          (total: number, ingredient: IIngredient | null) => {
            return total + (ingredient ? ingredient.price : 0);
          },
          0,
        );

        const extraIngredients: number =
          ingredients.length > 6 ? ingredients.length - 6 : 0;

        return (
          <Link
            key={index}
            className={styles.link}
            state={{ background: location }}
            to={
              feedPersonal
                ? `/profile/orders/${order.number}`
                : `/feed/${order.number}`
            }
          >
            <div className={styles.orderCard}>
              <div className={styles.orderDetails}>
                <div className={styles.orderTechDetails}>
                  <p className="text text_type_digits-default">
                    {order.number}
                  </p>
                  <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(order.createdAt)} />
                  </p>
                </div>
                <p className="text text_type_main-medium">{order.name}</p>
                <div className={styles.orderVisualisation}>
                  <div className={styles.orderIngredients}>
                    <ul className={styles.ingredientsList}>
                      {ingredients.slice(0, 6).map((ingredient, index) => (
                        <li
                          key={index}
                          className={styles.ingredientBorder}
                          style={{ zIndex: 6 - index }}
                        >
                          {ingredient ? (
                            <img
                              className={styles.ingredient}
                              src={ingredient.image_mobile}
                              alt={ingredient.name}
                            />
                          ) : null}
                        </li>
                      ))}
                      {extraIngredients > 0 && (
                        <li
                          className={`${styles.ingredientBorderDarkened}  text text_type_digits-default`}
                        >
                          <p className={styles.ingredientsExtra}>
                            +{extraIngredients}
                          </p>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className={styles.orderCost}>
                    <p className="text text_type_digits-default pr-2">
                      {totalPrice}
                    </p>
                    <CurrencyIcon type={"primary"} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default OrderFeed;
