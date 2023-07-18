import {
    FETCH_USER_PROFILE_FAIL,
    FETCH_USER_PROFILE_REQUEST,
    FETCH_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS
} from "../actions/profileForm";

const initialState = {
    userInfo: {
        name: '',
        email: ''
    },
    fetchProfileRequest: false,
    fetchProfileFail: false,
    updateUserProfileRequest: false,
    updateUserProfileFail: false
}

export const profileFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE_REQUEST:
            return {
                ...state,
                fetchProfileRequest: true
            };
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                ...state,
                fetchProfileRequest: false,
                userInfo: action.payload.user
            }
        case FETCH_USER_PROFILE_FAIL:
            return {
                ...state,
                fetchProfileRequest: false,
                fetchProfileFail: true
            }
        case UPDATE_USER_PROFILE_REQUEST:
            return {
                ...state,
                updateUserProfileRequest: true
            };
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                updateUserProfileRequest: false,
                userInfo: action.payload.user
            }
        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state,
                updateUserProfileRequest: false,
                updateUserProfileFail: true
            }
        default:
            return state;
    }
}