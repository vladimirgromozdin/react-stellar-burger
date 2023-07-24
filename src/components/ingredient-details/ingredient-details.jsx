import React, {useEffect} from "react";
import styles from "../ingredient-details/ingredient-details.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchIngredientDetails} from "../../services/actions/ingredientDetails";


function IngredientDetails(props) {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchIngredientDetails(id));
    }, [id, dispatch]);
    const ingredientDetails = useSelector(store => store.ingredientDetails.ingredient);
    return (
        <div className={`${styles.content} pt-10 pr-10 pl-10 pb-4`}>
            <h3 className={`${styles.headline} text text_type_main-large pt-10`}>Детали ингредиента</h3>
            <img src={ingredientDetails.image_large} className="pb-4" alt={ingredientDetails.name}/>
            <h4 className="text text_type_main-medium pb-8">{ingredientDetails.name}</h4>
            <ul className={styles.nutritionDataWrapper}>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientDetails.calories}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientDetails.proteins}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientDetails.fat}</p>
                </li>
                <li className={styles.nutritionData}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientDetails.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}


export default IngredientDetails