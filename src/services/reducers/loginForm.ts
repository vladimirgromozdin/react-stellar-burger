import {
  LOGIN_ATTEMPT,
  LOGIN_ATTEMPT_FAIL,
  LOGIN_ATTEMPT_SUCCESS,
} from "../constants/loginForm";
import { IUserInfo } from "../types/data";
import { TLoginFormActions } from "../actions/loginForm";

type TLoginFormState = Readonly<{
  authInfo: IUserInfo | {};
  loginAttempt: boolean;
  loginAttemptFail: boolean;
}>;

const loginFormInitialState: TLoginFormState = {
  authInfo: {},
  loginAttempt: false,
  loginAttemptFail: false,
};

export const loginReducer = (
  state = loginFormInitialState,
  action: TLoginFormActions,
): TLoginFormState => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loginAttempt: true,
      };
    case LOGIN_ATTEMPT_SUCCESS:
      return {
        ...state,
        loginAttempt: false,
        authInfo: action.payload,
      };
    case LOGIN_ATTEMPT_FAIL:
      return {
        ...state,
        loginAttempt: false,
        loginAttemptFail: true,
      };
    default:
      return state;
  }
};
