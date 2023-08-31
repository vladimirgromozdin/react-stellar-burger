import { api, checkResponse } from "../api";
import { getCookie } from "../utils";

import {
  PASSWORD_RESET,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from "../constants/resetPasswordForm";
import { Dispatch } from "redux";

export interface IPasswordResetAction {
  readonly type: typeof PASSWORD_RESET;
}

export interface IPasswordResetSuccessAction {
  readonly type: typeof PASSWORD_RESET_SUCCESS;
}

export interface IPasswordResetFailAction {
  readonly type: typeof PASSWORD_RESET_FAIL;
}

export type TResetPasswordFormActions =
  | IPasswordResetAction
  | IPasswordResetSuccessAction
  | IPasswordResetFailAction;

export const resetPassword = (password: string, token: string) => {
  return function (dispatch: Dispatch<TResetPasswordFormActions>) {
    dispatch({
      type: PASSWORD_RESET,
    });
    fetch(`${api}/password-reset/reset`, {
      method: "POST",
      body: JSON.stringify({
        password: password,
        token: token,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PASSWORD_RESET_SUCCESS,
          });
        } else {
          dispatch({
            type: PASSWORD_RESET_FAIL,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: PASSWORD_RESET_FAIL,
        });
      });
  };
};
