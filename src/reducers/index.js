import {combineReducers} from "redux";
import {inputFormReducer} from "./inputFormReducer";
import {userFetchReducer} from "./userFetchReducer";
import {reposFetchReducer} from "./reposFetchReducer";

export const rootReducer = combineReducers({
    inputForm: inputFormReducer,
    userFetch: userFetchReducer,
    userRepos: reposFetchReducer,
})