import {USER_FETCH_FAIL, USER_FETCH_START, USER_FETCH_SUCCESS} from "../actions/types";

const initialState = {
    userInfo: {},
    userRepos: [],
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
                userRepos: action.payload.repos,
            };
        case USER_FETCH_FAIL:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};