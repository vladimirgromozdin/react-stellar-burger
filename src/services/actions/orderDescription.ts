import { api, checkResponse } from "../api";
import {
  GET_ORDER_DESCRIPTION,
  GET_ORDER_DESCRIPTION_FAIL,
  GET_ORDER_DESCRIPTION_SUCCESS,
} from "../constants/orderDescription";
import { Dispatch } from "redux";
import { IOrder } from "../types/data";

export interface IGetOrderDescriptionAction {
  readonly type: typeof GET_ORDER_DESCRIPTION;
}

export interface IGetOrderDescriptionFailAction {
  readonly type: typeof GET_ORDER_DESCRIPTION_FAIL;
}

export interface IGetOrderDescriptionSuccessAction {
  readonly type: typeof GET_ORDER_DESCRIPTION_SUCCESS;
  readonly payload: IOrder;
}

export type TOrderDescriptionActions =
  | IGetOrderDescriptionAction
  | IGetOrderDescriptionSuccessAction
  | IGetOrderDescriptionFailAction;

export const fetchOrderDetails = (orderNumber: number) => {
  return async function (dispatch: Dispatch<TOrderDescriptionActions>) {
    dispatch({ type: GET_ORDER_DESCRIPTION });
    try {
      const response = await fetch(`${api}/orders/${orderNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await checkResponse(response);
      if (data && data.success) {
        dispatch({
          type: GET_ORDER_DESCRIPTION_SUCCESS,
          payload: data.orders[0],
        });
        return data.orders[0];
      } else {
        throw new Error(data.message || "fetching order details failed");
      }
    } catch (error) {
      dispatch({ type: GET_ORDER_DESCRIPTION_FAIL });
    }
  };
};
