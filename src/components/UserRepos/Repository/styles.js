import styled from "styled-components";

export const RepoWrapper = styled.article`
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