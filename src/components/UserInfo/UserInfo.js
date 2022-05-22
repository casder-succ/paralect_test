import React from 'react';
import styled from "styled-components";
import followersImg from './followers.svg';
import followingImg from './following.svg';

const UserWrapper = styled.section`
  .avatar,
  .avatar > img {
    height: 280px;
    width: 280px;
    border-radius: 50%;
  }
  
  .avatar {
    margin-bottom: 29px;
  }

  .title {
    margin-bottom: 12px;
    
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
  }
  
  .user-link {
    margin-bottom: 25px;
    
    font-size: 18px;
    line-height: 22px;
  }
  
  .subscriptions {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;

    font-size: 16px;
    line-height: 150%;
  }
  
  .subscriptions > div {
    display: flex;
    flex: 1 1 auto;
    align-content: flex-end;
    align-items: center;
    column-gap: 9px;
  }
  
  .subscriptions img {
    height: 24px;
    width: 24px;
  }
`;

const UserInfo = ({userInfo}) => {
    const {
        avatar_url, name,
        html_url, login,
        followers, following
    } = userInfo;

    return (
        <UserWrapper>
            <div className="avatar">
                <img src={avatar_url} alt="" width="280" height="280"/>
            </div>
            <h2 className="title">{name}</h2>
            <div className="user-link">
                <a href={html_url}>{login}</a>
            </div>
            <div className="subscriptions">
                <div>
                    <img src={followersImg} alt="followers_img"/>
                    <p>{followers} followers</p>
                </div>
                <div>
                    <img src={followingImg} alt="following_img"/>
                    <p>{following} following</p>
                </div>
            </div>
        </UserWrapper>
    );
};

export default UserInfo;