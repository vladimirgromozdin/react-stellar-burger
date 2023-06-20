import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from "./burgerIngredients";
import {burgerConstructorReducer} from "./burgerConstructor";
import {ingredientDetailsReducer} from "./ingredientDetails";
import {orderDetailsReducer} from "./orderDetails";


const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer
});

export default rootReducer;