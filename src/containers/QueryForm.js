import {connect} from "react-redux";
import {changeInput} from "../actions/inputForm";
import {fetchGithubUser, fetchUserRepos} from "../asyncActions/githubUser";
import Input from "../components/Header/Input/Input";

const mapStateToProps = (state) => ({
    query: state.inputForm.query,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => {
        dispatch(changeInput(value));
    },
    onKeyDown: (key, user) => {
        if (key === 'Enter') {
            dispatch(fetchGithubUser(user));
            dispatch(fetchUserRepos(user, 1));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);