import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 96px;

  max-width: 92%;
  margin: 28px auto 0;
  
  @media(max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 50px;
  }
`;