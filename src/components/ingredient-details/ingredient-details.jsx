import React from "react";
import styles from "../ingredient-details/ingredient-details.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {individualIngredientPropType} from "../../utils/prop-types";

function IngredientDetails(props) {
    const { ingredient, onClose } = props;

    const handleModalClose = () => {
        onClose();
    }

    return (
        <div className={`${styles.content} pt-10 pr-10 pl-10 pb-4`}>
            <div className={styles.closeIcon}>
                <CloseIcon type={"primary"} onClick={handleModalClose}></CloseIcon>
            </div>
            <h3 className={`${styles.headline} text text_type_main-large pt-10`}>Детали ингредиента</h3>
            <img src={ingredient.image_large} className="pb-4"/>
            <h4 className="text text_type_main-medium pb-8">{ingredient.name}</h4>
            <ul className={styles.nutritionDataWrapper}>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}

IngredientDetails.propTypes = individualIngredientPropType;

export default IngredientDetails