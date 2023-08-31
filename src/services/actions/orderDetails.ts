import { api, checkResponse } from "../api";
import { getCookie } from "../utils";

import {
  SEND_ORDER_DETAILS,
  SEND_ORDER_DETAILS_FAIL,
  SEND_ORDER_DETAILS_SUCCESS,
} from "../constants/orderDetails";
import { Dispatch } from "redux";
import { IUser } from "../types/data";

export interface ISendOrderDetailsAction {
  readonly type: typeof SEND_ORDER_DETAILS;
}

export interface ISendOrderDetailsSuccessAction {
  readonly type: typeof SEND_ORDER_DETAILS_SUCCESS;
  readonly orderId: number;
}

export interface ISendOrderDetailsFailAction {
  readonly type: typeof SEND_ORDER_DETAILS_FAIL;
}

export type TOrderDetailsActions =
  | ISendOrderDetailsAction
  | ISendOrderDetailsSuccessAction
  | ISendOrderDetailsFailAction;

export const getOrderDetails = (
  ingredientIds: string[],
  user: IUser | null,
  navigate: (route: string) => void,
) => {
  return function (dispatch: Dispatch<TOrderDetailsActions>) {
    if (!user) {
      navigate("/login");
      return;
    }
    const token: string | undefined = getCookie("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    dispatch({
      type: SEND_ORDER_DETAILS,
    });
    fetch(`${api}/orders`, {
      method: "POST",
      body: JSON.stringify({ ingredients: ingredientIds }),
      headers: {
        Authorization: token,
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: SEND_ORDER_DETAILS_SUCCESS,
            orderId: res.order.number,
          });
        } else {
          dispatch({
            type: SEND_ORDER_DETAILS_FAIL,
          });
        }
      });
  };
};
