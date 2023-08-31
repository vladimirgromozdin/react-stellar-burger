import { checkUserAuth, request } from "../api";
import { setCookie } from "../utils";
import {
  LOGIN_ATTEMPT,
  LOGIN_ATTEMPT_FAIL,
  LOGIN_ATTEMPT_SUCCESS,
} from "../constants/loginForm";
import { AppThunk } from "../types";

export interface ILoginAttemptAction {
  readonly type: typeof LOGIN_ATTEMPT;
}

export interface ILoginAttemptSuccessAction {
  readonly type: typeof LOGIN_ATTEMPT_SUCCESS;
  readonly payload: string;
}

export interface ILoginAttemptFailAction {
  readonly type: typeof LOGIN_ATTEMPT_FAIL;
}

export type TLoginFormActions =
  | ILoginAttemptAction
  | ILoginAttemptSuccessAction
  | ILoginAttemptFailAction;

export const loginRequest = (
  email: string,
  password: string,
  navigate: (path: string) => void,
) => {
  return async function (dispatch: AppThunk<Promise<unknown>>) {
    dispatch({
      type: LOGIN_ATTEMPT,
    });

    try {
      const res = await request(`/auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res && res.success) {
        setCookie("accessToken", res.accessToken, { expires: 12000 });
        setCookie("refreshToken", res.refreshToken, { expires: 86400 });
        dispatch({
          type: LOGIN_ATTEMPT_SUCCESS,
          payload: res,
        });
        dispatch(checkUserAuth());
        navigate("/");
      } else {
        dispatch({
          type: LOGIN_ATTEMPT_FAIL,
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: LOGIN_ATTEMPT_FAIL,
      });
    }
  };
};
