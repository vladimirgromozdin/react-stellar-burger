import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../constants/registerForm";
import { IUserInfo } from "../types/data";
import { TRegisterFormActions } from "../actions/registerForm";

type TRegisterFormState = Readonly<{
  authInfo: IUserInfo | {};
  registerUserRequest: boolean;
  registerUserFail: boolean;
}>;

const registerFormInitialState: TRegisterFormState = {
  authInfo: {},
  registerUserRequest: false,
  registerUserFail: false,
};

export const registerUserReducer = (
  state = registerFormInitialState,
  action: TRegisterFormActions,
): TRegisterFormState => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserRequest: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUserRequest: false,
        authInfo: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        registerUserRequest: false,
        registerUserFail: true,
      };
    default:
      return state;
  }
};
