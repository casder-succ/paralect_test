import {QUERY_CHANGE} from "../actions/types";

const initialState = {
    query: '',
};

export const inputForm = (state = initialState, action) => {
    switch (action.type) {
        case QUERY_CHANGE:
            return {
                ...state,
                query: action.payload.query,
            };
        default:
            return state;
    }
};