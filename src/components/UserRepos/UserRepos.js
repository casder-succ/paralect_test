import React from 'react';
import Repository from "./Repository/Repository";
import ReactPaginate from "react-paginate";
import nextActive from './next_active.svg';
import nextDisabled from './next_disabled.svg';
import previousActive from './previous_active.svg';
import previousDisabled from './previous_disabled.svg';
import Message from "../Message/Message";
import {messageTypes} from "../../util/messageTypes";
import {ReposWrapper} from "./styles";



const UserRepos = ({userRepos, quantity, onPageChange, loading, page}) => {
    const perPage = 4;
    const pageCount = Math.ceil(quantity / perPage);
    const min = (+page - 1) * perPage + 1;
    const max = page === pageCount ? quantity : min + 3;

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

            <div className="pagination-info">
                <div className="quantity-info">
                    {min}-{max} of {quantity} items
                </div>
                <ReactPaginate
                    pageCount={pageCount}
                    previousLabel={<img src={+page === 1 ? previousDisabled : previousActive} alt=""/>}
                    nextLabel={<img src={+page === +pageCount ? nextDisabled : nextActive} alt=""/>}
                    pageClassName='page-item'
                    nextClassName='page-item'
                    previousClassName='page-item'
                    breakClassName='page-item'
                    activeClassName='active'
                    containerClassName='pagination'
                    breakLabel="..."
                    onPageChange={(number) => onPageChange(number.selected + 1)}
                />
            </div>
        </ReposWrapper>
    );
};

export default UserRepos;