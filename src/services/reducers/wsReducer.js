import {WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_SEND_MESSAGE, WS_GET_MESSAGE, WS_CONNECTION_CLOSED} from "../actions/wsActionTypes";

const initialState = {
    wsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: undefined
};

export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_START:
            return {
                ...state,
                wsConnected: false,
                error: undefined
            }
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };

        case WS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            };
        default:
            return state;
    }
};