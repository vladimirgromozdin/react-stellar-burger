import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import styles from '../ingredient/ingredient.module.css'
import {saveCurrentIngredientDetails} from "../../../services/actions/ingredientDetails";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {useDrag} from "react-dnd";

function Ingredient({ingredient}) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: {ingredient}
    })
    const ingredientsList = useSelector(store => store.burgerConstructor.constructorIngredients)
    const ingredientCounter = ingredientsList.filter(item => item._id === ingredient._id).length
    const ingredientAdded = ingredientCounter > 0
    const handleIngredientClick = (ingredient) => {
        dispatch(saveCurrentIngredientDetails(ingredient))
        setIsModalOpen(true)
    };

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            {(isModalOpen &&
                <Modal onClose={handleModalClose}>
                    <IngredientDetails onClose={handleModalClose}/>
                </Modal>
            )}
            <li ref={dragRef} key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6`}
                onClick={() => handleIngredientClick(ingredient)}>
                <div className={styles.imageWithCounter}>
                    {ingredientAdded && (<Counter count={ingredientCounter} size="small"/>)}
                    <img src={ingredient.image} alt={ingredient.name}/>
                </div>
                <div className={`${styles.price} pt-1 pb-1`}>
                    <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <div
                    className={`${styles.ingredientName} text text_type_main-default`}>{ingredient.name}</div>
            </li>
        </>)
}

export default Ingredient