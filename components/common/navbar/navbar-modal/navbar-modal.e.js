import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
  /* z-index: -1; */
  &.active {
    background-color: #0d4656;
    visibility: visible;
    opacity: 1;
  }
`;

export const ModalRow = styled.div`
  display: flex;
`;
export const ModalMenuList = styled.ul`
  list-style: none;
  padding: 80px 0 100px 0;
  margin-left:  27.5%;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 50%;
    left: 0;
    height: 100%;
    width: 1px;
    transform: translateY(-50%);
    background-color: #fff;
  }
  @media (max-width: 1400px) {
    margin-left: 0;
    &::before {
      display: none;
    }
  }
`;

export const ModalMenuItem = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
  &.langs {
    display:none ;
    @media(max-width:500px){
      display: flex;
      justify-content:space-between ;
      max-width:160px ;
    }
  }
  .arrow-down {
    display: none;
  }
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    padding: 0 50px;
    display: block;
    &:hover{
      color: #F0803D;

    }
    @media (max-width: 1800px) {
      font-size: calc(20px + 16 * (100vw / 1920));
    }
    @media (max-width: 1200px) {
      padding-left: 0;
    }
  }
  &:hover {
    .inner-menu {
      visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 650px) {
    .arrow-down {
      display: inline-block;
    }
    &:hover {
      /* padding: 20px 0 0; */
      height: auto;
    }
  }
`;

export const ModalSubInnerMenu = styled.ul`
  position: absolute;
  opacity: 0;
  list-style: none;
  padding: 80px 0 100px 0;
  top: 0;
  right: -100%;
  transition: all 0.3s ease-out;
  height: 100%;
  width: 100%;
  visibility: hidden;
  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background-color: #fff;
  }
  @media (max-width: 650px) {
    display: none;
    height: 0;
    position: static;
    padding: 0px 0 0px;
    &::before {
      display: none;
    }
  }
`;
export const ModalSubMenuItem = styled.li`
  margin-bottom: 20px;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #ffffff;
    text-decoration: none;
    display: block;
    text-transform: initial;
    line-height: 100%;
    &:hover {
      color: #F0803D;
    }
    @media (max-width: 1800px) {
      font-size: calc(14px + 10 * (100vw / 1920));
    }
    @media (max-width: 1200px) {
      padding-left: 50px;
    }
  }
`;
