import React from 'react';
import logo from '../logo.png';
import styled from "styled-components";
import QueryForm from "../containers/QueryForm";

const HeaderWrapper = styled.header`
  display: flex;
  column-gap: 22px;
  
  padding: 16px 41px;
  height: 72px;
  width: 100%;
  
  background-color: #0064EB;
  
  img {
    width: 40px;
    height: 40px;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <img src={logo} alt="Github logo" width="40" height="40"/>
                </a>
            </div>

            <div>
                <QueryForm/>
            </div>
        </HeaderWrapper>
    );
};

export default Header;