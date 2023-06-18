import React, {useCallback, useEffect, useRef, useState} from "react";
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


function BurgerConstructor() {
    const dispatch = useDispatch();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        hover: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            // 80 is a height of an ingredient
            const index = Math.round(delta.y / 80);
            setHoveredIndex(index < 0 ? 0 : index);
        },
        drop(item, monitor) {
            onDropHandler(item, hoveredIndex);
        }
    })
    const onDropHandler = (item) => {
        const { ingredient, index } = item;
        if (index !== undefined) {
            // Reorder the existing ingredient
            dispatch(reorderIngredient(index, /* target index */));
        } else {
            // Add the new ingredient to the constructor
            dispatch(addIngredientToConstructor(ingredient));
        }
    };
    const ingredientIds = useSelector(store =>
        store.burgerConstructor.constructorIngredients.map(ingredient => ingredient._id));
    const ingredientsList = useSelector(store => store.burgerConstructor.constructorIngredients)
    const ingredientsTotal = useSelector(store => {
        return ingredientsList.length > 0
            ? ingredientsList.reduce((acc, currentItem) => acc + currentItem.price, 0)
            : 0;
    });
    const handleSendOrder = useCallback(() => {
        dispatch(getOrderDetails(ingredientIds));
    }, [dispatch, ingredientIds])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderClick = () => {
        handleSendOrder()
        setIsModalOpen(true);
    };


    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // Check if ingredientsList is defined and not empty
    const hasIngredients = ingredientsList && ingredientsList.length > 0;
    // Finding the bun in the state
    const bun = ingredientsList.find(ingredient => ingredient.type === 'bun');
    // Get the total cost of ingredients


    return (<div ref={dropTarget} className={`${styles.burgerConstructor} pt-25`}>
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
                {ingredientsList.filter((ingredient) => ingredient.type !== 'bun').map((ingredient, index) => {
                    return (<DraggableIngredient
                        key={ingredient.uniqueId}
                        ingredient={ingredient}
                        index={index}
                    />)

                    // return (<li ref={removeIconRef}
                    //             className={`${styles.ingredient} removable-ingredient pt-2 pr-2 pb-2 pl-4`}
                    //             key={ingredient.uniqueId}
                    //             data-unique-id={ingredient.uniqueId}>
                    //     <div className="pr-2">
                    //         <DragIcon type={"primary"}/>
                    //     </div>
                    //     <ConstructorElement
                    //         text={ingredient.name}
                    //         price={ingredient.price}
                    //         thumbnail={ingredient.image}
                    //     />
                    // </li>);
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
    </div>);
}


export default BurgerConstructor;
