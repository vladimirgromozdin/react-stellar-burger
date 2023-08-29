import {
  REMOVE_USER_DATA,
  SET_AUTH_CHECKED,
  SET_USER,
} from "../constants/checkAuth";
import { TCheckAuthActions } from "../actions/checkAuth";
import { IUser } from "../types/data";

type TCheckAuthState = Readonly<{
  user: IUser | null;
  isAuthChecked: boolean;
}>;

const checkAuthInitialState: TCheckAuthState = {
  user: null,
  isAuthChecked: false,
};

export const checkAuthReducer = (
  state = checkAuthInitialState,
  action: TCheckAuthActions,
): TCheckAuthState => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER_DATA:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
