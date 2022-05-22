import React from 'react';
import Repository from "./Repository/Repository";
import ReactPaginate from "react-paginate";
import next from './next.svg';
import previous from './previous.svg';
import Message from "../Message/Message";
import {messageTypes} from "../../util/messageTypes";
import {ReposWrapper} from "./styles";



const UserRepos = ({userRepos, quantity, onPageChange, loading}) => {
    if (userRepos.length === 0) {
        return (
            <ReposWrapper>
                <Message type={messageTypes.EMPTY_REPOS}/>
            </ReposWrapper>
        )
    }

    return (
        <ReposWrapper>
            <h2 className="title">Repositories ({quantity})</h2>
            {loading ?
                <Message type={messageTypes.LOADING}/> :
                <div>
                    {
                        userRepos.map(({description, name, html_url}) => {
                            return <Repository content={description} title={name} url={html_url}/>;
                        })
                    }
                </div>
            }

            <ReactPaginate
                pageCount={Math.ceil(quantity / 4)}
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