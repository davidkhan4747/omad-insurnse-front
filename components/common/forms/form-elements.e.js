import styled from "styled-components";

export const Wrapper = styled.div``;
export const WrapperInput = styled.span`
  position: relative;
  display: block;
  .form-control {
    background-color: #f1f1f1;
    outline: none;
    border: none;
    padding: 20px 20px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    margin-bottom: 40px;
  }
`;
export const WrapperError = styled.span`
  font-size: 14px;
  color: red;
  position: absolute;
  left: 0;
  bottom: 15px;
`;
