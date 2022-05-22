import React from 'react';
import {RepoWrapper} from "./styles";


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