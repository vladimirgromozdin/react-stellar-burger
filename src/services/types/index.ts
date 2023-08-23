import DraggableIngredient from "../../components/burger-constructor/draggable-ingredient/draggableIngredient";

// DraggableIngredient Component
export enum IngredientType {
    Bun = 'bun',
    Main = 'main',
    Sause = 'sauce'
}


export interface IIngredient {
    "_id": string,
    "name": string,
    "type": IngredientType,
    "proteins": number,
    "fat": number,
    "carbohydrates": number,
    "calories": number,
    "price": number,
    "image": string,
    "image_mobile": string,
    "image_large": string,
    "__v": number,
    "uniqueId": string
}

export interface DraggableIngredientProps {
    ingredient: IIngredient,
    id: string,
    moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}

export interface OrderDetailsProps {
    onClose: () => void
}

export interface DragItem {
    index: number
    ingredient: IIngredient
}