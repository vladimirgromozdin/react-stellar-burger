import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REORDER_INGREDIENT,
} from "../constants/burgerConstructor";
import { IIngredient } from "../types/data";

export interface IAddIngredientToConstructorAction {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
  readonly payload: IIngredient;
}

export interface IRemoveIngredientFromConstructorAction {
  readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  readonly payload: string;
}

export interface IReorderIngredientAction {
  readonly type: typeof REORDER_INGREDIENT;
  readonly payload: {
    oldIndex: number;
    newIndex: number;
  };
}

export type TBurgerConstructorActions =
  | IAddIngredientToConstructorAction
  | IRemoveIngredientFromConstructorAction
  | IReorderIngredientAction;

export const addIngredientToConstructor = (ingredient: IIngredient) => ({
  type: ADD_INGREDIENT_TO_CONSTRUCTOR,
  payload: ingredient,
});

export const removeIngredientFromConstructor = (uniqueId: string) => ({
  type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  payload: uniqueId,
});

export const reorderIngredient = (
  oldIndex: number,
  newIndex: number,
): IReorderIngredientAction => {
  return {
    type: REORDER_INGREDIENT,
    payload: { oldIndex, newIndex },
  };
};
