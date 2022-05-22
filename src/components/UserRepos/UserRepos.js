import React from 'react';
import Repository from "./Repository/Repository";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import next from './next.svg';
import previous from './previous.svg';
import Message from "../Message/Message";
import {messageTypes} from "../../util/messageTypes";

const ReposWrapper = styled.section`
  flex: 1 1 auto;

  .title {
    margin-bottom: 29px;
  }

  .page-item {
    padding: 2px 6px;
    border-radius: 3px;
    
    font-size: 14px;
    line-height: 21px;
    color: #808080;
    
    cursor: pointer;
  }

  .active {
    color: #FFFFFF;
    background: #0064EB;
  }
  
  .page-item a {
    color: inherit;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
`;

const UserRepos = ({userRepos = [], quantity, onPageChange}) => {
    if (userRepos.length === 0) {
        return (
            <ReposWrapper>
                <Message type={messageTypes.EMPTY_REPOS} />
            </ReposWrapper>
        )
    }

    return (
        <ReposWrapper>
            <h2 className="title">Repositories ({quantity})</h2>
            <div>
                {
                    userRepos.map(({description, name, html_url}) => {
                        return <Repository content={description} title={name} url={html_url}/>;
                    })
                }
            </div>
            <ReactPaginate
                pageCount={Math.floor(quantity / 4)}
                nextLabel={<img src={next} alt=""/>}
                previousLabel={<img src={previous} alt=""/>}
                pageClassName='page-item'
                nextClassName='page-item'
                previousClassName='page-item'
                breakClassName='page-item'
                activeClassName='active'
                containerClassName='pagination'
                breakLabel="..."
                onPageChange={(number) => onPageChange(number.selected + 1)}
            />
        </ReposWrapper>
    );
};

export default UserRepos;