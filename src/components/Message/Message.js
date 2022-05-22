import React from 'react';
import {messageTypes} from "../../util/messageTypes";
import styled, {keyframes} from "styled-components";
import emptyRepos from './emptyRepos.svg';
import startSearch from './startSearch.svg';
import userNotFound from './userNotFound.svg';
import loading from './loading.png';

const SpinAnimation = keyframes`
  from {transform: rotate(0);}
  to {transform: rotate(360deg);}
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 48px;
  
  height: 100%;
  width: 100%;

  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: #808080;
  
  .spin {
    height: 80px;
    width: 80px;
    animation-name: ${SpinAnimation};
    animation-duration: 4s;
  }
  
  .spin img {
    height: inherit;
    width: inherit;
  }
`;

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