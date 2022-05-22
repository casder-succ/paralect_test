import styled from "styled-components";

export const UserWrapper = styled.section`
  flex: 0 0 auto;
  
  .avatar,
  .avatar > img {
    height: 280px;
    width: 280px;
    border-radius: 50%;
  }
  
  .avatar {
    margin-bottom: 29px;
  }

  .title {
    margin-bottom: 12px;
    
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
  }
  
  .user-link {
    margin-bottom: 25px;
    
    font-size: 18px;
    line-height: 22px;
  }
  
  .subscriptions {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;

    font-size: 16px;
    line-height: 150%;
  }
  
  .subscriptions > div {
    display: flex;
    flex: 1 1 auto;
    align-content: flex-end;
    align-items: center;
    column-gap: 9px;
  }
  
  .subscriptions img {
    height: 24px;
    width: 24px;
  }
`;