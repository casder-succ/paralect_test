import React from 'react';
import {messageTypes} from "../../util/messageTypes";
import emptyRepos from './emptyRepos.svg';
import startSearch from './startSearch.svg';
import userNotFound from './userNotFound.svg';
import loading from './loading.png';
import {MessageWrapper} from "./styles";

const MessageTemplate = ({img, message, className}) => {
    return (
        <>
            <div className={className}><img src={img} alt=""/></div>
            <div>{message}</div>
        </>
    )
};

const Message = ({type}) => {
    let message;
    switch (type) {
        case messageTypes.LOADING:
            message = <MessageTemplate
                img={loading}
                message="Loading..."
                className="spin"
            />
            break;
        case messageTypes.EMPTY_REPOS:
            message = <MessageTemplate
                img={emptyRepos}
                message="Repository list is empty"
            />
            break;
        case messageTypes.START_SEARCH:
            message = <MessageTemplate
                img={startSearch}
                message={<>Start with searching <br /> a GitHub user</>}
            />
            break;
        case messageTypes.USER_NOT_FOUND:
            message = <MessageTemplate
                img={userNotFound}
                message="User not found"
            />
            break;
        default:
            return ;
    }
    return (
        <MessageWrapper>
            {message}
        </MessageWrapper>
    );
};

export default Message;