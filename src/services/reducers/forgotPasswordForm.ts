import {
  EMAIL_PASSWORD_RESET_LINK,
  EMAIL_PASSWORD_RESET_LINK_FAIL,
  EMAIL_PASSWORD_RESET_LINK_SUCCESS,
} from "../constants/forgotPasswordForm";
import { TForgotPasswordFormActions } from "../actions/forgotPasswordForm";

type TForgotPasswordFormState = Readonly<{
  emailPasswordResetLinkRequest: boolean;
  emailPasswordResetLinkFailed: boolean;
}>;

const forgotPasswordFormInitialState: TForgotPasswordFormState = {
  emailPasswordResetLinkRequest: false,
  emailPasswordResetLinkFailed: false,
};

export const forgotPasswordFormReducer = (
  state = forgotPasswordFormInitialState,
  action: TForgotPasswordFormActions,
): TForgotPasswordFormState => {
  switch (action.type) {
    case EMAIL_PASSWORD_RESET_LINK:
      return {
        ...state,
        emailPasswordResetLinkRequest: true,
      };

    case EMAIL_PASSWORD_RESET_LINK_SUCCESS:
      return {
        ...state,
        emailPasswordResetLinkRequest: false,
      };
    case EMAIL_PASSWORD_RESET_LINK_FAIL:
      return {
        ...state,
        emailPasswordResetLinkRequest: false,
        emailPasswordResetLinkFailed: true,
      };
    default:
      return state;
  }
};
