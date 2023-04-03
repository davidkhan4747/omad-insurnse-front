import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 25%;
  width: 100%;
  border: 1px solid #000;
  @media (max-width:768px){
    max-width: 100%;
  }
`;
export const RightWrapper = styled.div`
  padding: 40px 50px;
  @media (max-width: 1800px) {
    padding: 2% 2.5%;
  }
  &.vacancies {
    background-color: #0d4656;
    border-bottom: 1px solid #000;
  }
`;
export const RightTitle = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #000;
  margin: 0;
  &.white {
    color: #ffffff;
  }
`;
export const RightDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110%;
  color: #000;
  margin: 0;
  margin-top: 20px;
  &.white {
    color: #ffffff;
  }
`;
export const RightButton = styled.div`
  text-align: right;
  margin-top: 125px;
  &.bottom-button {
    margin-top: 45px;
   
  }
  @media(max-width:425px){
       margin-top:47px;
    }
`;
export const FormControl = styled.div`
  &:first-child {
    margin-bottom: 40px;
    margin-top: 20px;
  }
  &::placeholder {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
  input {
    background-color: #0d4656 !important;
    width: 100%;
    border: none;
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    padding: 15px 50px;
    outline: none;
  }
`;
