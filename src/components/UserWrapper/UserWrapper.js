import React from 'react';
import UserInfo from "../UserInfo/UserInfo";
import UserRepos from "../UserRepos/UserRepos";
import styled from "styled-components";
import Message from "../Message/Message";
import {messageTypes} from "../../util/messageTypes";

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 96px;

  max-width: 92%;
  margin: 28px auto 0;
`;

const UserWrapper = ({loading, error, userInfo, userRepos, handlePageChange}) => {
    if (loading) {
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
            />
        </ProfileContainer>
    );
};

export default UserWrapper;