import {REMOVE_CURRENT_INGREDIENT_DETAILS, SAVE_CURRENT_INGREDIENT_DETAILS} from "../actions/ingredientDetails";

const initialState = {};

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CURRENT_INGREDIENT_DETAILS:
            return {
                ingredient: action.payload
            }

        case REMOVE_CURRENT_INGREDIENT_DETAILS:
            return initialState

        default: {
            return state
        }
    }
}