import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  margin-right: 35px;
  span {
    white-space: nowrap;
    transition: all 0.4s ease-out;
  }

  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #0d4656;
    text-decoration: none;
    border: 2px solid #0d4656;
    padding: 10px 20px;
    display: inline-block;
    right: 0;
    transition: width 0.4s ease-out;

    position: relative;
  }
  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #0d4656;
    text-decoration: none;
    border: 2px solid #0d4656;
    padding: 10px 20px;
    display: inline-block;
    right: 0;
    transition: width 0.4s ease-out;
    position: relative;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -35px;
    transition: all 0.4s ease-out;
    background-color: #e5e5e5;
  }
  &.white {
    a {
      border: 2px solid #fff;
      color: #e3f1f5;
    }
    .arrow-right {
      background-color: #0d4656;
    }
  }
  &.blue {
    .arrow-right {
      background-color: #fff;
    }
  }
`;
