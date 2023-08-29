import { api, checkResponse } from "../api";
import {
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../constants/registerForm";
import { Dispatch } from "redux";
import { IUserInfo } from "../types/data";

export interface IRegisterUserAction {
  readonly type: typeof REGISTER_USER;
}

export interface IRegisterUserSuccessAction {
  readonly type: typeof REGISTER_USER_SUCCESS;
  readonly payload: IUserInfo;
}

export interface IRegisterUserFailAction {
  readonly type: typeof REGISTER_USER_FAIL;
}

export type TRegisterFormActions =
  | IRegisterUserAction
  | IRegisterUserSuccessAction
  | IRegisterUserFailAction;

export const registerUser = (email: string, password: string, name: string) => {
  return function (dispatch: Dispatch<TRegisterFormActions>) {
    dispatch({
      type: REGISTER_USER,
    });
    fetch(`${api}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: REGISTER_USER_FAIL,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: REGISTER_USER_FAIL,
        });
      });
  };
};
