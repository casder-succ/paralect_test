import {QUERY_CHANGE} from "./types";

export const changeInput = (newValue) => ({
    type: QUERY_CHANGE,
    payload: {
        query: newValue,
    }
});

