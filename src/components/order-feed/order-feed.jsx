import React, {useEffect} from 'react';
import styles from '../order-feed/order-feed.module.css';
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";

function OrderFeed({feedPersonal, wsUrl}) {
    const className = feedPersonal ? styles.feedPersonal : styles.feedGeneral;
    const dispatch = useDispatch();
    const orders = useSelector(store => store.ws.orders);
    const sortedOrders = feedPersonal ? [...orders].reverse() : orders;
    const allIngredients = useSelector(store => store.burgerIngredients.ingredients);
    useEffect(() => {
        dispatch({type: 'WS_CONNECTION_START', payload: {wsUrl}});
        return () => {
            dispatch({type: 'WS_CONNECTION_CLOSE'});
        };
    }, [dispatch, wsUrl]);

    return (
        <div className={`${className} custom-scroll`}>

            {sortedOrders.map((order, index) => {
                const ingredients = order.ingredients.map(ingredientId => {
                    const ingredientData = allIngredients.find(ingredient => ingredient._id === ingredientId);
                    return ingredientData ? ingredientData : null;
                });
                const totalPrice = ingredients.reduce((total, ingredient) => {
                    return total + (ingredient ? ingredient.price : 0);
                }, 0);

                const extraIngredients = ingredients.length > 6 ? ingredients.length - 6 : 0;

                return (
                    <div key={index} className={styles.orderCard}>
                        <div className={styles.orderDetails}>
                            <div className={styles.orderTechDetails}>
                                <p className="text text_type_digits-default">{order.number}</p>
                                <p className="text text_type_main-default text_color_inactive">
                                    <FormattedDate date={new Date(order.createdAt)}/>
                                </p>
                            </div>
                            <p className="text text_type_main-medium">{order.name}</p>
                            <div className={styles.orderVisualisation}>
                                <div className={styles.orderIngredients}>
                                    <ul className={styles.ingredientsList}>
                                        {ingredients.slice(0, 6).map((ingredient, index) => (
                                            <li key={index} className={styles.ingredientBorder}>
                                                {ingredient ?
                                                    <img className={styles.ingredient}
                                                         src={ingredient.image_mobile}
                                                         alt={ingredient.name}/>
                                                    : null}
                                            </li>
                                        ))}
                                        {extraIngredients > 0 &&
                                            <li className={`${styles.ingredientBorderDarkened}  text text_type_digits-default`}>
                                                <p className={styles.ingredientsExtra}>+{extraIngredients}</p></li>
                                        }
                                    </ul>
                                </div>
                                <div className={styles.orderCost}>
                                    <p className="text text_type_digits-default pr-2">{totalPrice}</p>
                                    <CurrencyIcon type={"primary"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OrderFeed;
