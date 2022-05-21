export const USER_FETCH_START = 'USER_FETCH_START';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAIL = 'USER_FETCH_FAIL';

export const userFetchStarted = () => ({
    type: USER_FETCH_START,
});

export const userFetchSuccess = (userInfo, userRepos) => ({
    type: USER_FETCH_SUCCESS,
    payload: {
        info: userInfo,
        repos: userRepos,
    },
});

export const userFetchFailed = (error) => ({
    type: USER_FETCH_FAIL,
    payload: {
        error,
    },
});