import { api, checkResponse } from "../api";
import {
  GET_INGREDIENT_DETAILS,
  GET_INGREDIENT_DETAILS_FAIL,
  GET_INGREDIENT_DETAILS_SUCCESS,
  SAVE_CURRENT_INGREDIENT_DETAILS,
} from "../constants/ingredientDetails";
import { IIngredient } from "../types/data";
import { Dispatch } from "redux";

export interface ISaveCurrentIngredientDetailAction {
  readonly type: typeof SAVE_CURRENT_INGREDIENT_DETAILS;
}

export interface IGetIngredientDetailsAction {
  readonly type: typeof GET_INGREDIENT_DETAILS;
}

export interface IGetIngredientDetailsSuccessAction {
  readonly type: typeof GET_INGREDIENT_DETAILS_SUCCESS;
  readonly payload: IIngredient;
}

export interface IGetIngredientDetailsFailAction {
  readonly type: typeof GET_INGREDIENT_DETAILS_FAIL;
}

export type TIngredientDetailsActions =
  | ISaveCurrentIngredientDetailAction
  | IGetIngredientDetailsAction
  | IGetIngredientDetailsSuccessAction
  | IGetIngredientDetailsFailAction;

export const saveCurrentIngredientDetails = (ingredient: IIngredient) => ({
  type: SAVE_CURRENT_INGREDIENT_DETAILS,
  payload: ingredient,
});

export const fetchIngredientDetails = (id: string) => {
  return function (dispatch: Dispatch<TIngredientDetailsActions>) {
    dispatch({
      type: GET_INGREDIENT_DETAILS,
    });
    fetch(`${api}/ingredients`)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          const ingredientDetails = res.data.find(
            (item: IIngredient) => item._id === id,
          );
          dispatch({
            type: GET_INGREDIENT_DETAILS_SUCCESS,
            payload: ingredientDetails,
          });
        } else {
          dispatch({
            type: GET_INGREDIENT_DETAILS_FAIL,
          });
        }
      });
  };
};
