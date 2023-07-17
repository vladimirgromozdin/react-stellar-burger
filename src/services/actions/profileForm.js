import {api, checkResponse} from "../api";
import {REGISTER_USER_FAIL, REGISTER_USER_SUCCESS} from "./registerForm";
import {getCookie} from "../utils";

export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';

export const UPDATE_USER_PROFILE_REQUEST = 'UPDATE_USER_PROFILE_REQUEST';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL';

export const fetchUserProfile = () => {
    const token = getCookie(
    )
    return async function (dispatch) {
        dispatch({ type: FETCH_USER_PROFILE_REQUEST });
        try {
            fetch(`${api}/auth/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }).then(checkResponse).then(res => {
                if (res && res.success) {
                    dispatch({
                        type: FETCH_USER_PROFILE_SUCCESS,
                        payload: res
                    })
                }
            })
        } catch (error) {
            dispatch({ type: FETCH_USER_PROFILE_FAIL, payload: error });
        }
    }
};