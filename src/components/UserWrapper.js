import React from 'react';
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import styled from "styled-components";

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
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error...</h1>
    }

    if (!userInfo?.login) {
        return <h1>Start...</h1>
    }

    return (
        <main>
            <ProfileContainer>
                <UserInfo userInfo={userInfo} />
                <UserRepos
                    userRepos={userRepos}
                    quantity={userInfo.public_repos}
                    onPageChange={handlePageChange}
                />
            </ProfileContainer>
        </main>
    );
};

export default UserWrapper;