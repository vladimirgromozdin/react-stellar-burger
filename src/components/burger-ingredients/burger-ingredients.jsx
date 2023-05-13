import React from "react";

import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import {ingredientPropType} from "../../utils/prop-types";

import styles from "../burger-ingredients/burger-ingredients.module.css";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')
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
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id={"buns"}>Булки</h3>
                <ul className={styles.grid}>
                    {props.data.filter(item => item.type === 'bun').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6`}>
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
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id={"sauce"}>Соусы</h3>
                <ul className={styles.grid}>
                    {props.data.filter(item => item.type === 'sauce').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6 pb-10`}>
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
                <h3 className={`${styles.title} text text_type_main-medium pl-5 mt-10`} id={"main"}>Начинки</h3>
                <ul className={styles.grid}>
                    {props.data.filter(item => item.type === 'main').map((ingredient) => (
                        <li key={ingredient._id} className={`${styles.ingredient} pl-8 pt-6 pb-10`}>
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

BurgerIngredients.propTypes = ingredientPropType;

export default BurgerIngredients;