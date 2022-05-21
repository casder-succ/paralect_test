import {connect} from "react-redux";
import UserWrapper from "../components/UserWrapper";

const mapStateToProps = (state) => ({
    userInfo: state.userFetch.userInfo,
    loading: state.userFetch.loading,
    error: state.userFetch.error,
});

export default connect(mapStateToProps)(UserWrapper);