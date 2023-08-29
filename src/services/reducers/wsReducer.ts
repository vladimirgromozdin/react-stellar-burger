import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants/wsActionTypes";
import { TwsActions } from "../actions/ws";
import { IOrder } from "../types/data";

type TwsReducerState = Readonly<{
  wsConnected: boolean;
  orders: IOrder[] | [];
  total: number | null;
  totalToday: number | null;
  error: undefined;
}>;

const wsReducerInitialState: TwsReducerState = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: undefined,
};

export const wsReducer = (
  state = wsReducerInitialState,
  action: TwsActions,
): TwsReducerState => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        wsConnected: false,
        error: undefined,
      };
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
