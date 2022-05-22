import {
    USER_FETCH_SUCCESS, USER_FETCH_START, USER_FETCH_FAIL
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