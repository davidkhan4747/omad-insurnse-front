import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f1f1f1;
  backdrop-filter: blur(10px);
  min-height: 100vh;
  padding-top: 10%;
  .panel {
    padding: 40px 50px;
  }
  @media(max-width:1600px){
  min-height: 110vh;

  }
`;
export const AuthBlock = styled.div`
  max-width: 690px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  @media(max-width:500px){
    margin: 69px auto;
    max-width: 360px;
  }
  .tabs {
    .MuiTabs-indicator {
      display: none;
    }
  }
  .tab-item {
    width: 50%;
    background: #0d4656;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff !important;
    padding: 25px 0;
    transition: all 0.4s ease-out;
    text-transform: capitalize;
    &.Mui-selected {
      background: #f0803d;
    }
  }
`;
export const FormCheck = styled.span`
  display: block;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  .label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  @media(max-width:425px){
    flex-direction: column-reverse;
  }
  a {
    text-decoration: underline;
  }
`;
export const AuthButton = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  background-color: #0d4656;
  border: 0;
  width: 100%;
  padding: 10px;
  border: 1px solid #0d4656;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: #0d4656;
  }
  &[disabled] {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
  color: #ffffff;

  background-color: #0d4656;

    }
  }
`;
export const AuthLink = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  display: block;
  text-align: center;
  margin-bottom: 40px;
  transition: all 0.3s ease-out;
  &:hover {
    color: #f0803d;
  }
`;
