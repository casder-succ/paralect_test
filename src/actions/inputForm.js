import {QUERY_CHANGE, QUERY_RESET} from "./types";

export const changeInput = (newValue) => ({
    type: QUERY_CHANGE,
    payload: {
        query: newValue,
    }
});

export const resetInput = () => ({
    type: QUERY_RESET,
});