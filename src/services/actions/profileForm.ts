import { api, checkResponse, checkUserAuth, refreshToken } from "../api";
import { deleteCookie, getCookie } from "../utils";
import { removeUserData } from "./checkAuth";

import {
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_REQUEST_FAIL,
  LOGOUT_USER_REQUEST_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
} from "../constants/profileForm";
import { Dispatch } from "redux";
import { IUserInfo } from "../types/data";

export interface IFetchUserProfileRequestAction {
  readonly type: typeof FETCH_USER_PROFILE_REQUEST;
}

export interface IFetchUserProfileSuccessAction {
  readonly type: typeof FETCH_USER_PROFILE_SUCCESS;
  readonly payload: IUserInfo;
}

export interface IFetchUserProfileFailAction {
  readonly type: typeof FETCH_USER_PROFILE_FAIL;
}

export interface IUpdateUserProfileRequestAction {
  readonly type: typeof UPDATE_USER_PROFILE_REQUEST;
}

export interface IUpdateUserProfileSuccessAction {
  readonly type: typeof UPDATE_USER_PROFILE_SUCCESS;
  readonly payload: IUserInfo;
}

export interface IUpdateUserProfileFailAction {
  readonly type: typeof UPDATE_USER_PROFILE_FAIL;
}

export interface ILogoutUserRequestAction {
  readonly type: typeof LOGOUT_USER_REQUEST;
}

export interface ILogoutUserRequestSuccessAction {
  readonly type: typeof LOGOUT_USER_REQUEST_SUCCESS;
  readonly payload: IUserInfo;
}

export interface ILogoutUserRequestFailAction {
  readonly type: typeof LOGOUT_USER_REQUEST_FAIL;
}

export type TProfileFormActions =
  | IFetchUserProfileRequestAction
  | IFetchUserProfileSuccessAction
  | IFetchUserProfileFailAction
  | IUpdateUserProfileRequestAction
  | IUpdateUserProfileSuccessAction
  | IUpdateUserProfileFailAction
  | ILogoutUserRequestAction
  | ILogoutUserRequestSuccessAction
  | ILogoutUserRequestFailAction;

export const fetchUserProfile = () => {
  return async function (
    dispatch: Dispatch<TProfileFormActions>,
  ): Promise<IUserInfo> {
    const token: string | undefined = getCookie("accessToken");
    dispatch({ type: FETCH_USER_PROFILE_REQUEST });
    const getUserData = async (): Promise<any> => {
      try {
        if (token) {
          const response = await fetch(`${api}/auth/user`, {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          });
          const data = await checkResponse(response);
          if (data && data.success) {
            dispatch({
              type: FETCH_USER_PROFILE_SUCCESS,
              payload: data,
            });
            return data;
          } else {
            throw new Error(data.message || "Profile fetch failed");
          }
        }
      } catch (error) {
        const e = error as Error;
        if (e.message === "jwt expired") {
          const refreshedToken = await refreshToken();
          if (refreshedToken) {
            return getUserData();
          } else {
            dispatch({ type: FETCH_USER_PROFILE_FAIL, payload: error });
          }
        } else {
          dispatch({ type: FETCH_USER_PROFILE_FAIL, payload: error });
        }
      }
    };
    return getUserData();
  };
};

export const updateUserProfile = (name: string, email: string) => {
  return async function (dispatch: Dispatch<TProfileFormActions>) {
    const token = getCookie("accessToken");
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST });
    const updateUserData = async (name: string, email: string) => {
      try {
        if (token) {
          const response = await fetch(`${api}/auth/user`, {
            method: "PATCH",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
            }),
          });
          const data = await checkResponse(response);
          if (data && data.success) {
            dispatch({
              type: UPDATE_USER_PROFILE_SUCCESS,
              payload: data,
            });
          } else {
            throw new Error(data.message || "Profile fetch failed");
          }
        }
      } catch (error) {
        const e = error as Error;
        if (e.message === "jwt expired") {
          const refreshedToken = await refreshToken();
          if (refreshedToken) {
            updateUserData(name, email);
          } else {
            dispatch({ type: UPDATE_USER_PROFILE_FAIL, payload: error });
          }
        } else {
          dispatch({ type: UPDATE_USER_PROFILE_FAIL, payload: error });
        }
      }
    };
    updateUserData(name, email);
  };
};

export const logout = () => {
  return async function (
    dispatch: Dispatch<TProfileFormActions> | ((dispatch: any) => void),
  ) {
    const token = getCookie("refreshToken");
    dispatch({ type: LOGOUT_USER_REQUEST });
    const logUserOut = async () => {
      try {
        const response = await fetch(`${api}/auth/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
          }),
        });
        const data = await checkResponse(response);
        if (data && data.success) {
          dispatch({
            type: LOGOUT_USER_REQUEST_SUCCESS,
            payload: data,
          });
          deleteCookie("refreshToken");
          deleteCookie("accessToken");
          dispatch(removeUserData());
          dispatch(checkUserAuth());
        } else {
          throw new Error(data.message || "Profile fetch failed");
        }
      } catch (error) {
        const e = error as Error;
        if (e.message === "jwt expired") {
          const refreshedToken = await refreshToken();
          if (refreshedToken) {
            await logUserOut();
          } else {
            dispatch({ type: LOGOUT_USER_REQUEST_FAIL, payload: error });
          }
        } else {
          dispatch({ type: LOGOUT_USER_REQUEST_FAIL, payload: error });
        }
      }
    };
    await logUserOut();
  };
};
