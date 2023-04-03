import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 80px;
  background-color: #e5e5e5;
  border-bottom: 1px solid #000;
`;
export const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(max-width:425px){
    flex-direction: column;
  flex-wrap: nowrap;

  }
`;
