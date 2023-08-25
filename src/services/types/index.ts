import React, {ComponentType, ReactElement} from "react";

// DraggableIngredient Component

export enum IngredientType {
    Bun = 'bun',
    Main = 'main',
    Sauce = 'sauce'
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

export interface IDraggableIngredientProps {
    ingredient: IIngredient,
    id: string,
    moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}

export interface IDragItem {
    index: number
    ingredient: IIngredient
}

// Ingredient Component
export type TIngredientProps = {
    ingredient: IIngredient
};

export type TRequestPasswordChangeEmailOptions = {
    onSuccess?: () => void;
};

// IngredientDetails Component
export type TIngredientDetailsProps = {
    onClose?: () => void
};

// Modal Component
export interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
    showCloseIcon?: boolean;
}

//ModalOverlayComponent
export type TModalOverlayProps = {
    onClose: () => void;
}

//OrderDescription Component
export type TOrderDescriptionProps = {
    isModal: boolean
};

export type TOrderStatus = 'done' | 'created' | 'pending';

export interface IOrder {
    _id: string,
    ingredients: string[],
    owner: string,
    status: TOrderStatus,
    name: string,
    createdAt: string,
    updatedAt: string,
    number: number,
    __v: number
}

// OrderFeed Component
export type TOrderFeedProps = {
    feedPersonal: boolean,
    wsUrl: string
}

// ProtectedComponent
export type TProtectedProps = {
    onlyUnAuth?: boolean,
    component: ReactElement
}

export type TOnlyUnAuth = {
    component: ReactElement
}
