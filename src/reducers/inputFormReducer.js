import {QUERY_CHANGE, QUERY_RESET} from "../actions/types";

const initialState = {
    query: '',
};

export const inputFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUERY_CHANGE:
            return {
                ...state,
                query: action.payload.query,
            };
        case QUERY_RESET:
            return {
                ...state,
                query: '',
            };
        default:
            return state;
    }
};