import {rootReducer} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: getDefaultMiddleware => (
            getDefaultMiddleware().concat(thunkMiddleware)
        )
    }
);