import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../constants/wsActionTypes";
import { IOrder } from "../types/data";

export type TwsConnectionStartAction = {
  readonly type: typeof WS_CONNECTION_START;
};

export type TwsConnectionErrorAction = {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any;
};

export type TwsConnectionSuccessAction = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};

export type TwsConnectionClosedAction = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};
export type TwsGetMessageAction = {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: {
    orders: IOrder[] | [];
    total: number;
    totalToday: number;
  };
};
export type TwsSendMessageAction = {
  readonly type: typeof WS_SEND_MESSAGE;
};

export type TwsActions =
  | TwsConnectionStartAction
  | TwsConnectionErrorAction
  | TwsConnectionSuccessAction
  | TwsConnectionClosedAction
  | TwsGetMessageAction
  | TwsSendMessageAction;
