import {combineReducers} from 'redux';
import {burgerIngredientsReducer} from "./burgerIngredients";
import {burgerConstructorReducer} from "./burgerConstructor";
import {ingredientDetailsReducer} from "./ingredientDetails";
import {orderDetailsReducer} from "./orderDetails";
import {forgotPasswordFormReducer} from "./forgotPasswordForm";
import {resetPasswordFormReducer} from "./resetPasswordForm";
import {registerUserReducer} from "./registerForm";
import {loginReducer} from "./loginForm";


const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    forgotPasswordForm: forgotPasswordFormReducer,
    resetPasswordForm: resetPasswordFormReducer,
    registerUser: registerUserReducer,
    login: loginReducer
});

export default rootReducer;