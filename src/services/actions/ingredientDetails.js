export const SAVE_CURRENT_INGREDIENT_DETAILS = 'SAVE_CURRENT_INGREDIENT_DETAILS'

export const REMOVE_CURRENT_INGREDIENT_DETAILS = 'REMOVE_CURRENT_INGREDIENT_DETAILS'

export const saveCurrentIngredientDetails = (ingredient) => ({
    type: SAVE_CURRENT_INGREDIENT_DETAILS,
    payload: ingredient
})