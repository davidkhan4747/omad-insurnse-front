import styled from "styled-components";
export const Wrapper = styled.div`
  padding-top: 110px;
  padding-bottom: 40px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 110%;
  text-transform: uppercase;
  padding: 20px 50px ;
  color: #ffffff;
  margin: 109px 0 0 40px;
  @media(max-width:425px){
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 110%;
    text-transform: uppercase;
    /* padding: 20px 50px; */
    color: #ffffff;

    margin: 10px 0px;
    padding: 20px;
  }
`;
export const BranDPos = styled.div`
  padding: 111px 0 0px 45px;
`