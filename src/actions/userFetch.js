import {
    REPOS_FETCH_SUCCESS, USER_FETCH_SUCCESS, USER_FETCH_START,
    REPOS_FETCH_START, USER_FETCH_FAIL, REPOS_FETCH_FAIL
} from "./types";

export const userFetchStarted = () => ({
    type: USER_FETCH_START,
});

export const userFetchSuccess = (userInfo) => ({
    type: USER_FETCH_SUCCESS,
    payload: {
        info: userInfo,
    },
});

export const userFetchFailed = () => ({
    type: USER_FETCH_FAIL,
});

export const reposFetchStarted = () => ({
    type: REPOS_FETCH_START,
})

export const reposFetchSuccess = (userRepos) => ({
    type: REPOS_FETCH_SUCCESS,
    payload: {
        repos: userRepos,
    }
});

export const reposFetchFailed = () => ({
    type: REPOS_FETCH_FAIL,
});