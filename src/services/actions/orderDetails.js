import {api, checkResponse} from "../api";

export const SEND_ORDER_DETAILS = 'SEND_ORDER_DETAILS'
export const SEND_ORDER_DETAILS_SUCCESS = 'SEND_ORDER_DETAILS_SUCCESS'
export const SEND_ORDER_DETAILS_FAIL = 'GET_ORDER_DETAILS_FAIL'

export const getOrderDetails = (ingredientIds) => {
    return function (dispatch) {
        dispatch({
            type: SEND_ORDER_DETAILS
        })
        fetch(`${api}/orders`, {
                method: 'POST',
                body: JSON.stringify({ingredients: ingredientIds}),
                headers: {
                    "content-type": "application/json; charset=UTF-8"
                }
            }
        ).then(checkResponse).then(res => {
            // TODO Check wy the failed case doesn't work
            if (res && res.success) {
                dispatch({
                    type: SEND_ORDER_DETAILS_SUCCESS,
                    orderId: res.order.number
                })
            } else {
                dispatch({
                    type: SEND_ORDER_DETAILS_FAIL
                })
            }
        })
    }
}