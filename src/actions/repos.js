import {REPOS_FETCH_FAIL, REPOS_FETCH_START, REPOS_FETCH_SUCCESS, REPOS_SET_PAGE} from "./types";

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

export const reposSetPage = (page) => ({
    type: REPOS_SET_PAGE,
    payload: {
        page
    }
})