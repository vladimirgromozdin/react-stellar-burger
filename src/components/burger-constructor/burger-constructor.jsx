import React, {useContext, useState} from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "../burger-constructor/burger-constructor.module.css";
import {ConstructorContext} from "../../utils/constructorContext";
import {OrderContext} from "../../utils/orderContext";
import {api, checkResponse} from "../app/app";


function BurgerConstructor() {
    const ingredientsList = useContext(ConstructorContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderId, setOrderID] = useState(null)

    // Get ingredient IDs to send order to the server
    const ingredientIds = () => {
        if (ingredientsList) {
            return ingredientsList.map((function (item) {
                return item["_id"];
            }))
        }
    }

    const sendOrder = () => {
        fetch(`${api}/orders`, {
                method: 'POST',
                body: JSON.stringify({ingredients: ingredientIds()}),
                headers: {
                    "content-type": "application/json; charset=UTF-8"
                }
            }
        ).then(checkResponse).then(res => {
            setOrderID(res.order.number);
        })
    }

    const handleOrderClick = () => {
        sendOrder()
        setIsModalOpen(true);
    };


    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Check if ingredientsList is defined and not empty
    // It sends two arrays for some reasons, the empty one and the one with data
    const hasIngredients = ingredientsList && ingredientsList.length > 0;
    // Find the last bun in the state
    const lastBun = ingredientsList.slice().reverse().find(ingredient => ingredient.type === 'bun');
    // Get the total cost of ingredients
    const totalCost = hasIngredients && ingredientsList.reduce((acc, ingredient) => {
        return acc + ingredient.price;
    }, 0) + lastBun.price;


    return (<div className={`${styles.burgerConstructor} pt-25`}>
        <ul className={styles.ingredientsList}>
            {hasIngredients && (<>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${lastBun.name} (верх)`}
                        price={lastBun.price}
                        thumbnail={lastBun.image}
                    />
                </li>
                <div
                    className={`${styles.variableIngredientsList} custom-scroll`}
                >
                    {ingredientsList.filter((ingredient) => ingredient.type !== 'bun').map((ingredient, index) => {
                        return (<li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`} key={ingredient._id}>
                            <div className="pr-2">
                                <DragIcon type={"primary"}/>
                            </div>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </li>);
                    })}
                </div>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${lastBun.name} (низ)`}
                        price={lastBun.price}
                        thumbnail={lastBun.image}
                    />
                </li>
            </>)}
        </ul>
        <div className={`${styles.total} pt-8`}>
            <div className={`${styles.price} pr-10`}>
                <h4 className="text text_type_digits-medium pr-2">{totalCost}</h4>
                <CurrencyIcon type={"primary"}/>
            </div>
            <Button
                htmlType={"button"}
                type={"primary"}
                size={"medium"}
                onClick={handleOrderClick}
            >
                Оформить заказ
            </Button>
            {isModalOpen && (<Modal onClose={handleModalClose}>
                <OrderContext.Provider value={orderId}><OrderDetails
                    onClose={handleModalClose}/></OrderContext.Provider>
            </Modal>)}
        </div>
    </div>);
}


export default BurgerConstructor;
