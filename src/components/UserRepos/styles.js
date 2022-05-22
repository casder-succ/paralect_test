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
    list-style: none;
  }
  
  .pagination-info {
    display: flex;
    justify-content: flex-end;
    column-gap: 24px;
    
    margin-top: 26px;
    margin-bottom: 30px;

    font-size: 14px;
    line-height: 21px;
    color: #808080; 
  }
  
  @media(max-width: 750px) {
    min-height: 300px;
  }
`;