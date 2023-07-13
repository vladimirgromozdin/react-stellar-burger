import {api, checkResponse} from "../api";

export const PASSWORD_RESET = 'REQUEST_PASSWORD_RESET'
export const PASSWORD_RESET_SUCCESS = 'REQUEST_PASSWORD_RESET_SUCCESS'
export const PASSWORD_RESET_FAIL = 'REQUEST_PASSWORD_RESET_FAIL'

export const resetPassword = (password, token) => {
    return function (dispatch) {
        console.log('Password Reset Attempt')
        dispatch({
            type: PASSWORD_RESET
        })
        fetch(`${api}/password-reset/reset`, {
            method: 'POST', body: JSON.stringify({
                "password": password,
                "token": token
            }), headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(checkResponse).then(res => {
            if (res && res.success) {
                dispatch({
                    type: PASSWORD_RESET_SUCCESS,
                })
            } else {
                dispatch({
                    type: PASSWORD_RESET_FAIL
                })
            }
        })
    }
}