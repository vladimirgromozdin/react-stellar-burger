import {api, checkResponse} from "../api";

export const EMAIL_PASSWORD_RESET_LINK = 'EMAIL_PASSWORD_RESET_LINK'
export const EMAIL_PASSWORD_RESET_LINK_SUCCESS = 'EMAIL_PASSWORD_RESET_LINK_SUCCESS'
export const EMAIL_PASSWORD_RESET_LINK_FAIL = 'EMAIL_PASSWORD_RESET_LINK_FAIL'

export const requestPasswordChangeEmail = email => {
    return function (dispatch) {
        console.log('Password Change Email Attempt')
        dispatch({
            type: EMAIL_PASSWORD_RESET_LINK
        })
        fetch(`${api}/password-reset`, {
            method: 'POST', body: JSON.stringify({
                "email": email
            }), headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(checkResponse).then(res => {
            if (res && res.success) {
                dispatch({
                    type: EMAIL_PASSWORD_RESET_LINK_SUCCESS,
                })
            } else {
                dispatch({
                    type: EMAIL_PASSWORD_RESET_LINK_FAIL
                })
            }
        })
    }
}