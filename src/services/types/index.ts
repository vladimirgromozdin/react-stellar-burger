import React, { ReactElement } from "react";
import { IIngredient } from "./data";
import { store } from "./store";
import { TBurgerConstructorActions } from "../actions/burgerConstructor";
import { TBurgerIngredientsActions } from "../actions/burgerIngredients";
import { TCheckAuthActions } from "../actions/checkAuth";
import { TIngredientDetailsActions } from "../actions/ingredientDetails";
import { TLoginFormActions } from "../actions/loginForm";
import { TOrderDetailsActions } from "../actions/orderDetails";
import { TOrderDescriptionActions } from "../actions/orderDescription";
import { TProfileFormActions } from "../actions/profileForm";
import { TRegisterFormActions } from "../actions/registerForm";
import { TResetPasswordFormActions } from "../actions/resetPasswordForm";
import { TwsActions } from "../actions/ws";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;

// DraggableIngredient Component

export enum IngredientType {
  Bun = "bun",
  Main = "main",
  Sauce = "sauce",
}

export interface IDraggableIngredientProps {
  ingredient: IIngredient;
  id: string;
  moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}

export interface IDragItem {
  index: number;
  ingredient: IIngredient;
}

// Ingredient Component
export type TIngredientProps = {
  ingredient: IIngredient;
};

export type TRequestPasswordChangeEmailOptions = {
  onSuccess?: () => void;
};

// IngredientDetails Component
export type TIngredientDetailsProps = {
  onClose?: () => void;
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
};

//OrderDescription Component
export type TOrderDescriptionProps = {
  isModal: boolean;
};

export type TOrderStatus = "done" | "created" | "pending";

// OrderFeed Component
export type TOrderFeedProps = {
  feedPersonal: boolean;
  wsUrl: string;
};

// ProtectedComponent
export type TProtectedProps = {
  onlyUnAuth?: boolean;
  component: ReactElement;
};

export type TOnlyUnAuth = {
  component: ReactElement;
};

export type TStellarBurgerAppActions =
  | TBurgerConstructorActions
  | TBurgerIngredientsActions
  | TCheckAuthActions
  | TIngredientDetailsActions
  | TLoginFormActions
  | TOrderDetailsActions
  | TOrderDescriptionActions
  | TProfileFormActions
  | TRegisterFormActions
  | TResetPasswordFormActions
  | TwsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TStellarBurgerAppActions>
>;

export type AppDispatch = Dispatch<TStellarBurgerAppActions>;
