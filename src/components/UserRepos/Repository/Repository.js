import React from 'react';
import styled from "styled-components";

const RepoWrapper = styled.article`
  padding: 24px 32px;
  background: #FFFFFF;
  border-radius: 6px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
  
  .title {
    margin-bottom: 16px;

    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }
  
  .content {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Repository = ({title, url, content}) => {
    return (
        <RepoWrapper>
            <h3 className="title">
                <a href={url}>{title}</a>
            </h3>
            <p className="content">{content}</p>
        </RepoWrapper>
    );
};

export default Repository;