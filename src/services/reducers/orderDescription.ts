import {
  GET_ORDER_DESCRIPTION,
  GET_ORDER_DESCRIPTION_FAIL,
  GET_ORDER_DESCRIPTION_SUCCESS,
} from "../constants/orderDescription";
import { IOrder } from "../types/data";
import { TOrderDescriptionActions } from "../actions/orderDescription";

type TOrderDescriptionState = Readonly<{
  order: IOrder | null;
  getOrderDescription: boolean;
  getOrderDescriptionFail: boolean;
  getOrderDescriptionDone: boolean;
}>;

const orderDescriptionInitialState: TOrderDescriptionState = {
  order: null,
  getOrderDescription: false,
  getOrderDescriptionFail: false,
  getOrderDescriptionDone: false,
};

export const orderDescriptionReducer = (
  state = orderDescriptionInitialState,
  action: TOrderDescriptionActions,
): TOrderDescriptionState => {
  switch (action.type) {
    case GET_ORDER_DESCRIPTION:
      return {
        ...state,
        getOrderDescription: true,
        getOrderDescriptionFail: false,
        getOrderDescriptionDone: false,
      };
    case GET_ORDER_DESCRIPTION_SUCCESS:
      return {
        getOrderDescription: false,
        getOrderDescriptionFail: false,
        getOrderDescriptionDone: true,
        order: action.payload,
      };
    case GET_ORDER_DESCRIPTION_FAIL:
      return {
        ...state,
        getOrderDescription: false,
        getOrderDescriptionFail: true,
        getOrderDescriptionDone: false,
      };
    default:
      return state;
  }
};
