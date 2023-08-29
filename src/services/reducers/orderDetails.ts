import {
  SEND_ORDER_DETAILS,
  SEND_ORDER_DETAILS_FAIL,
  SEND_ORDER_DETAILS_SUCCESS,
} from "../constants/orderDetails";
import { TOrderDetailsActions } from "../actions/orderDetails";

type TOrderDetailsState = Readonly<{
  ingredients: string[];
  orderId: number | null;
  sendOrderDetailsRequest: boolean;
  sendOrderDetailsFailed: boolean;
}>;

const orderDetailsInitialState: TOrderDetailsState = {
  ingredients: [],
  orderId: null,
  sendOrderDetailsRequest: false,
  sendOrderDetailsFailed: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action: TOrderDetailsActions,
): TOrderDetailsState => {
  switch (action.type) {
    case SEND_ORDER_DETAILS:
      return {
        ...state,
        sendOrderDetailsRequest: true,
      };
    case SEND_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderId: action.orderId,
        sendOrderDetailsRequest: false,
        sendOrderDetailsFailed: false,
      };
    case SEND_ORDER_DETAILS_FAIL:
      return {
        ...state,
        sendOrderDetailsRequest: false,
        sendOrderDetailsFailed: true,
      };
    default:
      return state;
  }
};
