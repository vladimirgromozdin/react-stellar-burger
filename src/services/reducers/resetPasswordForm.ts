import {
  PASSWORD_RESET,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
} from "../constants/resetPasswordForm";
import { TResetPasswordFormActions } from "../actions/resetPasswordForm";

type TResetPasswordFormState = Readonly<{
  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
}>;

const resetPasswordInitialState: TResetPasswordFormState = {
  resetPasswordRequest: false,
  resetPasswordFailed: false,
};

export const resetPasswordFormReducer = (
  state = resetPasswordInitialState,
  action: TResetPasswordFormActions,
): TResetPasswordFormState => {
  switch (action.type) {
    case PASSWORD_RESET:
      return {
        ...state,
        resetPasswordRequest: true,
      };

    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        resetPasswordRequest: false,
      };
    case PASSWORD_RESET_FAIL:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    default:
      return state;
  }
};
