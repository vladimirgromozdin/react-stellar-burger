import {api, checkResponse} from "../api";
import {getCookie} from "../utils";

export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';

export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL';

export const fetchUserProfile = () => {
    const token = getCookie('accessToken')
    return async function (dispatch) {
        dispatch({type: FETCH_USER_PROFILE_REQUEST});
        fetch(`${api}/auth/user`, {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
        })
            .then(checkResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: FETCH_USER_PROFILE_SUCCESS,
                        payload: res
                    });
                } else {
                    throw new Error(res.message || 'Profile fetch failed');
                }
            })
            .catch((error) => {
                dispatch({type: FETCH_USER_PROFILE_FAIL, payload: error});
            });
    }
};

export const updateUserProfile = (name, email) => {
    const token = getCookie('accessToken')
    return async function (dispatch) {
        dispatch({type: UPDATE_USER_PROFILE_REQUEST});
        fetch(`${api}/auth/user`, {
            method: 'PATCH', body: JSON.stringify({
                "name": name,
                "email": email
            }),
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
        })
            .then(checkResponse)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: UPDATE_USER_PROFILE_SUCCESS,
                        payload: res
                    });
                } else {
                    throw new Error(res.message || 'Profile fetch failed');
                }
            })
            .catch((error) => {
                dispatch({type: UPDATE_USER_PROFILE_FAIL, payload: error});
            });
    }
};