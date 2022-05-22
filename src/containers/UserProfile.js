import {connect} from "react-redux";
import UserWrapper from "../components/UserWrapper/UserWrapper";
import {fetchUserRepos} from "../asyncActions/githubUser";

const mapStateToProps = (state) => ({
    userInfo: state.userFetch.userInfo,
    userRepos: state.userRepos.userRepos,
    userLoading: state.userFetch.loading,
    repoLoading: state.userRepos.loading,
    currentPage: state.userRepos.currentPage,
    error: state.userFetch.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handlePageChange: (page) => {
        dispatch(fetchUserRepos(ownProps.userInfo?.login, page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserWrapper);