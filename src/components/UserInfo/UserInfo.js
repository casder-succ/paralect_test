import React from 'react';
import followersImg from './followers.svg';
import followingImg from './following.svg';
import {UserWrapper} from "./styles";

const UserInfo = ({userInfo}) => {
    let {
        avatar_url, name,
        html_url, login,
        followers, following
    } = userInfo;

    followers = followers >= 1000 ? (followers / 1000).toFixed(1) + 'k' : followers;
    following = following >= 1000 ? (following / 1000).toFixed(1) + 'k' : following;

    return (
        <UserWrapper>
            <div className="avatar">
                <img src={avatar_url} alt="" width="280" height="280"/>
            </div>
            <h2 className="title">{name}</h2>
            <div className="user-link">
                <a href={html_url} target="_blank" rel="noreferrer">{login}</a>
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