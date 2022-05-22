import {
    userFetchFailed,
    userFetchStarted,
    userFetchSuccess
} from "../actions/userFetch";
import {constants} from "../util/constants";
import {reposFetchFailed, reposFetchStarted, reposFetchSuccess, reposSetPage} from "../actions/repos";

export const fetchGithubUser = (user) => (
    async (dispatch) => {
        dispatch(userFetchStarted());

        try {
            const userResponse = await fetch(constants.userUrl(user));

            if (userResponse.ok) {
                const userJson = await userResponse.json();
                dispatch(userFetchSuccess(userJson));
            } else {
                dispatch(userFetchFailed());
            }
        } catch (e) {
            dispatch(userFetchFailed());
        }
    }
);

export const fetchUserRepos = (user, page) => (
    async (dispatch, getState) => {
        dispatch(reposFetchStarted());
        dispatch(reposSetPage(page));
        if (!user) {
            user = getState().userFetch.userInfo.login;
        }

        try {
            const reposResponse = await fetch(constants.reposUrl(user, page));

            if (reposResponse.ok) {
                const reposJson = await reposResponse.json();

                dispatch(reposFetchSuccess(reposJson));
            } else {
                dispatch(reposFetchFailed());
            }
        } catch (e) {
            dispatch(reposFetchFailed());
        }
    }
);