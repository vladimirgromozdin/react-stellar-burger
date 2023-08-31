import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  REORDER_INGREDIENT,
} from "../constants/burgerConstructor";
import { IIngredient } from "../types/data";
import { v4 as uuidv4 } from "uuid";
import { TBurgerConstructorActions } from "../actions/burgerConstructor";

type TBurgerConstructorState = Readonly<{
  constructorIngredients: IIngredient[];
}>;

const burgerConstructorInitialState: TBurgerConstructorState = {
  constructorIngredients: [],
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action: TBurgerConstructorActions,
): TBurgerConstructorState => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR:
      if (action.payload.type === "bun") {
        const noExistingBun = state.constructorIngredients.filter(
          (ingredient) => ingredient.type !== "bun",
        );
        return {
          ...state,
          constructorIngredients: [
            ...noExistingBun,
            {
              ...action.payload,
              uniqueId: uuidv4(),
            },
          ],
        };
      } else {
        return {
          ...state,
          constructorIngredients: [
            ...state.constructorIngredients,
            {
              ...action.payload,
              uniqueId: uuidv4(),
            },
          ],
        };
      }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR:
      const ingredientIsPresent = state.constructorIngredients.some(
        (ingredient) => ingredient.uniqueId === action.payload,
      );
      if (ingredientIsPresent) {
        return {
          ...state,
          constructorIngredients: state.constructorIngredients.filter(
            (ingredient) => ingredient.uniqueId !== action.payload,
          ),
        };
      } else {
        return state;
      }

    case REORDER_INGREDIENT:
      const { oldIndex, newIndex } = action.payload;
      const newState = [...state.constructorIngredients];
      const [movedItem] = newState.splice(oldIndex, 1);
      newState.splice(newIndex, 0, movedItem);
      return {
        ...state,
        constructorIngredients: newState,
      };
    default:
      return state;
  }
};
