import React from 'react';
import UserInfo from "../UserInfo/UserInfo";
import UserRepos from "../UserRepos/UserRepos";
import Message from "../Message/Message";
import {messageTypes} from "../../util/messageTypes";
import {ProfileContainer} from "./styles";

const UserWrapper = (props) => {
    const {
        userInfo, userRepos,
        userLoading, repoLoading,
        error, handlePageChange
    } = props;

    if (userLoading) {
        return (
            <Message type={messageTypes.LOADING}/>
        )
    }

    if (error) {
        return (
            <Message type={messageTypes.USER_NOT_FOUND}/>
        )
    }

    if (!userInfo?.login) {
        return (
            <Message type={messageTypes.START_SEARCH}/>
        )
    }

    return (
        <ProfileContainer>
            <UserInfo userInfo={userInfo}/>
            <UserRepos
                userRepos={userRepos}
                quantity={userInfo.public_repos}
                onPageChange={handlePageChange}
                loading={repoLoading}
            />
        </ProfileContainer>
    );
};

export default UserWrapper;