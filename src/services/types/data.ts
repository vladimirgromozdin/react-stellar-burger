import { IngredientType, TOrderStatus } from "./index";

export interface IIngredient {
  _id: string;
  name: string;
  type: IngredientType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uniqueId: string;
}

export interface IIngredientWithQuantity extends IIngredient {
  quantity: number;
}

export interface IOrder {
  _id: string;
  ingredients: string[];
  owner: string;
  status: TOrderStatus;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
}

export interface IUserInfo {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface IUser {
  email: string;
  name: string;
}
