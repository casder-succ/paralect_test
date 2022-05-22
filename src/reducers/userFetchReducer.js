import {USER_FETCH_FAIL, USER_FETCH_START, USER_FETCH_SUCCESS} from "../actions/types";

const initialState = {
    userInfo: {},
    loading: false,
    error: false,
};

export const userFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_START:
            return {
                ...state,
                error: false,
                loading: true,
            };
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userInfo: action.payload.info,
            };
        case USER_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};