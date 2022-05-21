import {combineReducers} from "redux";
import {inputFormReducer} from "./inputFormReducer";
import {userFetchReducer} from "./userFetchReducer";

export const rootReducer = combineReducers({
    inputForm: inputFormReducer,
    userFetch: userFetchReducer,
})