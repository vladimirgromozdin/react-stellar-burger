import { api, checkResponse } from "../api";
import { TRequestPasswordChangeEmailOptions } from "../types";
import {
  EMAIL_PASSWORD_RESET_LINK,
  EMAIL_PASSWORD_RESET_LINK_FAIL,
  EMAIL_PASSWORD_RESET_LINK_SUCCESS,
} from "../constants/forgotPasswordForm";

export interface IEmailPasswordResetLinkAction {
  readonly type: typeof EMAIL_PASSWORD_RESET_LINK;
}

export interface IEmailPasswordResetLinkSuccessAction {
  readonly type: typeof EMAIL_PASSWORD_RESET_LINK_SUCCESS;
}

export interface IEmailPasswordResetLinkFailAction {
  readonly type: typeof EMAIL_PASSWORD_RESET_LINK_FAIL;
}

export type TForgotPasswordFormActions =
  | IEmailPasswordResetLinkAction
  | IEmailPasswordResetLinkSuccessAction
  | IEmailPasswordResetLinkFailAction;

export const requestPasswordChangeEmail = (
  email: string,
  options: TRequestPasswordChangeEmailOptions = {},
) => {
  const { onSuccess } = options;
  return function (dispatch: any) {
    dispatch({
      type: EMAIL_PASSWORD_RESET_LINK,
    });
    fetch(`${api}/password-reset`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: EMAIL_PASSWORD_RESET_LINK_SUCCESS,
          });
          if (onSuccess) {
            onSuccess();
          }
        } else {
          dispatch({
            type: EMAIL_PASSWORD_RESET_LINK_FAIL,
          });
        }
      });
  };
};
