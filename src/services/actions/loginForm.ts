import { api, checkResponse, checkUserAuth } from "../api";
import { setCookie } from "../utils";

import {
  LOGIN_ATTEMPT,
  LOGIN_ATTEMPT_FAIL,
  LOGIN_ATTEMPT_SUCCESS,
} from "../constants/loginForm";
import { Dispatch } from "redux";

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
  navigate: any,
) => {
  return async function (
    dispatch: Dispatch<TLoginFormActions> | ((dispatch: any) => void),
  ) {
    dispatch({
      type: LOGIN_ATTEMPT,
    });
    await fetch(`${api}/auth/login`, {
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
    })
      .then(checkResponse)
      .then((res) => {
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
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: LOGIN_ATTEMPT_FAIL,
        });
      });
  };
};
