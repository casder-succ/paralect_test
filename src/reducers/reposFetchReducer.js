import {
    REPOS_FETCH_FAIL,
    REPOS_FETCH_START,
    REPOS_FETCH_SUCCESS, REPOS_SET_PAGE,
} from "../actions/types";

const initialState = {
    userRepos: [],
    currentPage: 1,
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
            return {
                ...state,
                loading: false,
                error: false,
                userRepos: action.payload.repos,
            };
        case REPOS_SET_PAGE:
            return {
                ...state,
                currentPage: action.payload.page,
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

