import styled from "styled-components";

export const ReposWrapper = styled.section`
  min-height: 640px;
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

    margin-top: 26px;
    margin-bottom: 30px;
  }
  
  @media(max-width: 750px) {
    min-height: 300px;
  }
`;