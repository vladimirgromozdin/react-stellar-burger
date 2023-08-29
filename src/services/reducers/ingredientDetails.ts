import {
  GET_INGREDIENT_DETAILS,
  GET_INGREDIENT_DETAILS_FAIL,
  GET_INGREDIENT_DETAILS_SUCCESS,
} from "../constants/ingredientDetails";
import { IIngredient } from "../types/data";
import { TIngredientDetailsActions } from "../actions/ingredientDetails";

type TIngredientDetailsState = Readonly<{
  ingredient: IIngredient | null;
  ingredientDetailsRequest: boolean;
  ingredientDetailsRequestFail: boolean;
}>;

const ingredientDetailsInitialState: TIngredientDetailsState = {
  ingredient: null,
  ingredientDetailsRequest: false,
  ingredientDetailsRequestFail: false,
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsInitialState,
  action: TIngredientDetailsActions,
): TIngredientDetailsState => {
  switch (action.type) {
    case GET_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredientDetailsRequest: true,
      };
    case GET_INGREDIENT_DETAILS_SUCCESS:
      return {
        ...state,
        ingredient: action.payload,
        ingredientDetailsRequest: false,
        ingredientDetailsRequestFail: false,
      };
    case GET_INGREDIENT_DETAILS_FAIL:
      return {
        ...state,
        ingredientDetailsRequestFail: true,
      };
    default: {
      return state;
    }
  }
};
