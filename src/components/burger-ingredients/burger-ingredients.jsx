// TODO Make every ingredient a separate component for proper click behavior
import React, {useState, useEffect} from "react";

import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import {individualIngredientPropType, ingredientPropType} from "../../utils/prop-types";

import styles from "../burger-ingredients/burger-ingredients.module.css";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import PropTypes from "prop-types";

function BurgerIngredients(props) {
    const [current, setCurrent] = useState('bun')
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)


    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient);
        setIsModalOpen(true)
    };

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={styles.content}>
            <h2 className={`${styles.title} text text_type_main-large pl-5 mt-10 mb-5`}>Соберите бургер</h2>
            <div className={styles.tabs}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles.burgerIngredients} custom-scroll`}>
                {(isModalOpen &&
                    <Modal onClose={handleModalClose}>
                        <IngredientDetails ingredient={selectedIngredient} onClose={handleModalClose}/>
                    </Modal>
                )}
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id="buns">Булки</h3>
                <ul className={styles.grid}>
                    {props.ingredients.filter(item => item.type === 'bun').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6`}
                            onClick={() => handleIngredientClick(ingredient)}>
                            <div className={styles.imageWithCounter}>
                                <Counter count={1} size="small"/>
                                <img src={ingredient.image} alt={ingredient.name}/>
                            </div>
                            <div className={`${styles.price} pt-1 pb-1`}>
                                <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div
                                className={`${styles.ingredientName} text text_type_main-default`}>{ingredient.name}</div>
                        </li>))}
                </ul>
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id="sauce">Соусы</h3>
                <ul className={styles.grid}>
                    {props.ingredients.filter(item => item.type === 'sauce').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6 pb-10`}
                            onClick={() => handleIngredientClick(ingredient)}>
                            <div className={styles.imageWithCounter}>
                                <Counter count={1} size="small"/>
                                <img src={ingredient.image} alt={ingredient.name}/>
                            </div>
                            <div className={`${styles.price} pt-1 pb-1`}>
                                <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div
                                className={`${styles.ingredientName} text text_type_main-default`}>{ingredient.name}</div>
                        </li>))}
                </ul>
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id="main">Начинки</h3>
                <ul className={styles.grid}>
                    {props.ingredients.filter(item => item.type === 'main').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6 pb-10`}
                            onClick={() => handleIngredientClick(ingredient)}>
                            <div className={styles.imageWithCounter}>
                                <Counter count={1} size="small"/>
                                <img src={ingredient.image} alt={ingredient.name}/>
                            </div>
                            <div className={`${styles.price} pt-1 pb-1`}>
                                <p className="text text_type_digits-default pr-2">{ingredient.price}</p>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div
                                className={`${styles.ingredientName} text text_type_main-default`}>{ingredient.name}</div>
                        </li>))}
                </ul>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape(individualIngredientPropType)
    ).isRequired,
}

export default BurgerIngredients;