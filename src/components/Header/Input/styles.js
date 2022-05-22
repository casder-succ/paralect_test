import styled from "styled-components";
import searchIcon from "./searchIcon.svg";

export const InputWrapper = styled.input`
  position: relative;
  
  height: 40px;
  width: 100%;
  padding: 8px 0 8px 44px;
  
  border: none;
  background-color: #FFFFFF;
  border-radius: 6px;

  font-family: Inter, sans-serif;
  font-size: 14px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position:19px 13px ;
  
  &:focus {
    outline: none;
    border: none;
  }
`;