import styled, {keyframes} from "styled-components";

const SpinAnimation = keyframes`
  from {transform: rotate(0);}
  to {transform: rotate(360deg);}
`;

export const MessageWrapper = styled.div`
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