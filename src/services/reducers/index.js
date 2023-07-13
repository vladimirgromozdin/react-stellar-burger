import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from "./burgerIngredients";
import {burgerConstructorReducer} from "./burgerConstructor";
import {ingredientDetailsReducer} from "./ingredientDetails";
import {orderDetailsReducer} from "./orderDetails";
import {forgotPasswordFormReducer} from "./forgotPasswordForm";
import {resetPasswordFormReducer} from "./resetPasswordForm";


const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    forgotPasswordFormReducer: forgotPasswordFormReducer,
    resetPasswordFormReducer: resetPasswordFormReducer
});

export default rootReducer;