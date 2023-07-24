import React, {useCallback, useMemo, useState} from "react";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "../burger-constructor/burger-constructor.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetails} from "../../services/actions/orderDetails";
import {useDrop} from "react-dnd";
import {addIngredientToConstructor} from "../../services/actions/burgerIngredients";
import {reorderIngredient} from "../../services/actions/burgerConstructor";
import DraggableIngredient from "./draggable-ingredient/draggableIngredient";
import {useNavigate} from "react-router-dom";


function BurgerConstructor() {
    const user = useSelector((store) => store.checkAuth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const moveIngredient = useCallback(
        (dragIndex, hoverIndex) => {
            dispatch(reorderIngredient(dragIndex, hoverIndex));
        },
        [dispatch]
    );
    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item, monitor) {
            onDropHandler(item);
        }
    })

    const onDropHandler = (item) => {
        const {ingredient} = item;
        const isIngredientPresent = constructorIngredients.find(ing => ing.uniqueId === ingredient.uniqueId);
        if (!isIngredientPresent) {
            // Add the new ingredient to the constructor
            dispatch(addIngredientToConstructor(ingredient));
        }
    }

    const constructorIngredients = useSelector(store => store.burgerConstructor.constructorIngredients)

    const ingredientsIds = useMemo(() => {
        return constructorIngredients.map(ingredient => ingredient._id)
    }, [constructorIngredients])

    const ingredientsTotal = useMemo(() => {
        return constructorIngredients.length > 0
            ? constructorIngredients.reduce((acc, currentItem) => acc + currentItem.price, 0)
            : 0;
    }, [constructorIngredients])

    const handleSendOrder = useCallback(() => {
        dispatch(getOrderDetails(ingredientsIds, user, navigate));
    }, [dispatch, ingredientsIds])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderClick = () => {
        handleSendOrder()
        setIsModalOpen(true);
    };


    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Check if ingredientsList is defined and not empty
    const hasIngredients = constructorIngredients && constructorIngredients.length > 0;
    // Finding the bun in the state
    const bun = constructorIngredients.find(ingredient => ingredient.type === 'bun');
    // Get the total cost of ingredients


    return (<section ref={dropTarget} className={`${styles.burgerConstructor} pt-25`}>
        <ul className={styles.ingredientsList}>
            {hasIngredients && bun && (<>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </li>
            </>)}

            <div
                className={`${styles.variableIngredientsList} custom-scroll removable-ingredients`}
            >
                {constructorIngredients.filter((ingredient) => ingredient.type !== 'bun').map((ingredient, index) => {
                    return (<DraggableIngredient
                        key={ingredient.uniqueId}
                        id={ingredient._id}
                        ingredient={ingredient}
                        moveIngredient={moveIngredient}
                    />)
                })}
            </div>

            {hasIngredients && bun && (<>
                <li className={`${styles.ingredient} pt-2 pr-2 pb-2 pl-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </li>
            </>)}
        </ul>
        <div className={`${styles.total} pt-8`}>
            <div className={`${styles.price} pr-10`}>
                <h4 className="text text_type_digits-medium pr-2">{ingredientsTotal}</h4>
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
                <OrderDetails
                    onClose={handleModalClose}/>
            </Modal>)}
        </div>
    </section>);
}


export default BurgerConstructor;
