import {userFetchFailed, userFetchStarted, userFetchSuccess} from "../actions/userFetch";
import {constants} from "../util/constants";

export const fetchGithubUser = (user) => (
    async (dispatch) => {
        dispatch(userFetchStarted());
        
        try {
            const userResponse = await fetch(constants.userUrl(user));

            if (userResponse.ok) {
                const userJson = await userResponse.json();

                const reposResponse = await fetch(constants.reposUrl(user));
                const reposJson = await reposResponse.json();

                dispatch(userFetchSuccess(userJson, reposJson));
            } else {
                dispatch(userFetchFailed());
            }
        } catch (e) {
            dispatch(userFetchFailed());
        }
    }
);