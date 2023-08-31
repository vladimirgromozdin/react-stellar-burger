import { api, checkResponse } from "../api";
import {
  GET_INGREDIENTS_FAIL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../constants/burgerIngredients";
import { IIngredient } from "../types/data";
import { Dispatch } from "redux";

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IIngredient[];
}

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsFailAction {
  readonly type: typeof GET_INGREDIENTS_FAIL;
}

export type TBurgerIngredientsActions =
  | IGetIngredientsSuccessAction
  | IGetIngredientsRequestAction
  | IGetIngredientsFailAction;

export const getIngredients = () => {
  return function (dispatch: Dispatch<TBurgerIngredientsActions>) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(`${api}/ingredients`)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAIL,
          });
        }
      });
  };
};
