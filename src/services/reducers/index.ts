import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { burgerConstructorReducer } from "./burgerConstructor";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";
import { forgotPasswordFormReducer } from "./forgotPasswordForm";
import { resetPasswordFormReducer } from "./resetPasswordForm";
import { registerUserReducer } from "./registerForm";
import { loginReducer } from "./loginForm";
import { profileFormReducer } from "./profileForm";
import { checkAuthReducer } from "./checkAuth";
import { wsReducer } from "./wsReducer";
import { orderDescriptionReducer } from "./orderDescription";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  forgotPasswordForm: forgotPasswordFormReducer,
  resetPasswordForm: resetPasswordFormReducer,
  registerUser: registerUserReducer,
  login: loginReducer,
  profileForm: profileFormReducer,
  checkAuth: checkAuthReducer,
  ws: wsReducer,
  orderDescription: orderDescriptionReducer,
});
