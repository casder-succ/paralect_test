import {
    REPOS_FETCH_FAIL,
    REPOS_FETCH_START,
    REPOS_FETCH_SUCCESS,
} from "../actions/types";

const initialState = {
    userRepos: [],
    loading: false,
    error: false,
};

export const reposFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPOS_FETCH_START:
            return {
                ...state,
                error: false,
                loading: true,
            };
        case REPOS_FETCH_SUCCESS:
            console.log(action)
            return {
                ...state,
                loading: false,
                error: false,
                userRepos: action.payload.repos,
            };
        case REPOS_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

