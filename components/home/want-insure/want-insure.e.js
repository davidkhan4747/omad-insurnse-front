import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  @media (max-width: 1000px) {
    .container {
      max-width: 100%;
    }
  }
`;
export const InsureRow = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
export const InsureTitleBlock = styled.div`
  max-width: 27%;
  width: 100%;
  padding: 40px 0;
  @media (max-width: 1500px) {
    padding: 20px 0;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    padding-left: 2.5%;
  }
  @media (max-width: 768px) {
    padding-left: 5%;
  }
  @media(max-width:500px){
    padding-left:0 ;
  }
`;
export const InsureTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  margin-left: 47px;
  font-size: 36px;
  line-height: 100%;
  color: #ffffff;
  max-width: 350px;
  @media (max-width: 1800px) {
    font-size: calc(16px + 20 * (100vw / 1920));
  }
  @media(max-width:500px){
    text-align: left ;
    margin-left: 18px;

  }
`;
export const InsureIndividualsBlock = styled.div`
  max-width: 27%;
  width: 100%;
  padding: 40px 50px;
  border-left: 1px solid #fff;
  background-color: transparent;
  transition: all 0.4s ease-out;
  &.active {
    background-color: #f0803d;  
    .btn {
      /* background-color: #f0803d !important; */
      transform: rotate(-180deg) translateY(50%) !important;
      path {
        fill: #0d4656;
      }
    }
    .description {
      opacity: 0.5;
    }
  }
  @media (max-width: 1600px) {
    max-width: 35%;
  }
  @media (max-width: 1500px) {
    padding: 20px 30px;
  }
  @media (max-width: 1000px) {
    max-width: 50%;
    border-left: none;
    &:last-child {
      border: none;
    }
  }
  @media(max-width:500px){
    padding: 18px 18px;
  }
`;
export const InsureIndividualsBlockYur = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 40px 50px;
  border-left: 1px solid #fff;
  background-color: transparent;
  transition: all 0.4s ease-out;
  &.active {
    background-color: #f0803d;
    .btn {
      /* background-color: #f0803d !important; */
      transform: rotate(-180deg) translateY(50%) !important;
      path {
        fill: #0d4656;
      }
    }
    .description {
      opacity: 0.5;
    }
  }
  @media (max-width: 1600px) {
    max-width: 35%;
  }
  @media (max-width: 1500px) {
    padding: 20px 30px;
  }
  @media (max-width: 1000px) {
    max-width: 50%;
    border-left: none;
    &:last-child {
      border: none;
    }
  }
  @media(max-width:500px){
    padding: 18px 18px;
  }
`;

export const PersonTitle = styled.h4`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  @media (max-width: 1800px) {
    font-size: calc(14px + 10 * (100vw / 1920));
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const PersonDescription = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 20px;
  height: 130px;
  opacity: 0;
  transition: all 0.3s ease-out;
  /* @media (max-width: 1800px) {
    font-size: calc(14px + 10 * (100vw / 1920));
  } */
  @media (max-width: 1450px) {
    height: 100px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;

  }
  @media (max-width: 1000px) {
    height: 80px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InsureBtn = styled.div`
  /* height: 50px;
  width: 50px;
  border: 2px solid #fff; */
  height: 50px;
  width: 50px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  .btn {
    /* background-color: #0d4656; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 1s ease-out;
  }
  path {
    transition: all 0.4s ease-out;
  }

  .arrow-left {
    left: 50%;
    transition: transform 0.4s ease-out;
  }
  @media (max-width: 1366px) {
    height: 40px;
    width: 40px;
    .btn {
      width: 30px;
    }
  }
`;
