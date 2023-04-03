import styled from "styled-components";

export const BreadCrumbs = styled.div`
       color: #ffff;
    position: relative;
    padding: 0;
    top: 85px;
    left: 52px;
    margin: -24px 0;
    z-index: 2;
    padding: 0px;

    &.black {
      color: #000;
    }
  @media (max-width:425px){
    display:none;
   
  }
`;
