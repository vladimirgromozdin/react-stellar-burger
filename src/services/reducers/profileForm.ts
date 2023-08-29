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
import { TProfileFormActions } from "../actions/profileForm";

type TProfileFormState = Readonly<{
  userInfo: {
    name: string;
    email: string;
  };
  fetchProfileRequest: boolean;
  fetchProfileFail: boolean;
  updateUserProfileRequest: boolean;
  updateUserProfileFail: boolean;
  logoutUserRequest: boolean;
  logoutUserFail: boolean;
}>;

const profileFormInitialState: TProfileFormState = {
  userInfo: {
    name: "",
    email: "",
  },
  fetchProfileRequest: false,
  fetchProfileFail: false,
  updateUserProfileRequest: false,
  updateUserProfileFail: false,
  logoutUserRequest: false,
  logoutUserFail: false,
};

export const profileFormReducer = (
  state = profileFormInitialState,
  action: TProfileFormActions,
): TProfileFormState => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        fetchProfileRequest: true,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        fetchProfileRequest: false,
        userInfo: action.payload.user,
      };
    case FETCH_USER_PROFILE_FAIL:
      return {
        ...state,
        fetchProfileRequest: false,
        fetchProfileFail: true,
      };
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        updateUserProfileRequest: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        updateUserProfileRequest: false,
        userInfo: action.payload.user,
      };
    case UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
        updateUserProfileRequest: false,
        updateUserProfileFail: true,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        logoutUserRequest: true,
      };
    case LOGOUT_USER_REQUEST_SUCCESS:
      return {
        ...state,
        logoutUserRequest: false,
        userInfo: action.payload.user,
      };
    case LOGOUT_USER_REQUEST_FAIL:
      return {
        ...state,
        logoutUserRequest: false,
        logoutUserFail: true,
      };
    default:
      return state;
  }
};
