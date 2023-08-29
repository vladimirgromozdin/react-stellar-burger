import {
  REMOVE_USER_DATA,
  SET_AUTH_CHECKED,
  SET_USER,
} from "../constants/checkAuth";
import { IUser } from "../types/data";

export interface ISetAuthCheckedAction {
  readonly type: typeof SET_AUTH_CHECKED;
  readonly payload: boolean;
}

export interface ISetUserAction {
  readonly type: typeof SET_USER;
  readonly payload: IUser;
}

export interface IRemoveUserDataAction {
  readonly type: typeof REMOVE_USER_DATA;
}

export type TCheckAuthActions =
  | ISetUserAction
  | ISetAuthCheckedAction
  | IRemoveUserDataAction;

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: IUser) => ({
  type: SET_USER,
  payload: user,
});

export const removeUserData = () => {
  return {
    type: REMOVE_USER_DATA,
  };
};
