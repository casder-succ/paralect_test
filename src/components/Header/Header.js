import React from 'react';
import logo from './logo.png';
import QueryForm from "../../containers/QueryForm";
import {HeaderWrapper} from "./styles";

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <img src={logo} alt="Github logo" width="40" height="40"/>
                </a>
            </div>

            <div className="input-form">
                <QueryForm/>
            </div>
        </HeaderWrapper>
    );
};

export default Header;