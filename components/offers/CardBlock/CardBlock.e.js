import styled from 'styled-components';

export const CardBody = styled.div`
  padding: 40px 50px;
  background: #ffffff;
  width: 1478px;
  margin: 40px auto;
  z-index: 1;
  @media (max-width: 1480px) {
    width: 1078px;
  }
  @media (max-width: 1090px) {
    width: 660px;
  }

  @media (max-width: 890px) {
    width: 800px;
  }
  @media (max-width: 760px) {
    width: 600px;
  }
  @media (max-width: 425px) {
    width: 420px;
    padding: 23px 20px;
  }
  @media (max-width: 375px) {
    width: 350px;
    padding: 20px 20px;
  }
  @media (max-width: 330px) {
    width: 300px;
    padding: 20px 20px;
  }
`;
export const CardInfo = styled.div`
  width: 844px;
  @media (max-width: 890px) {
    width: 343px;
  }
  @media (max-width: 350px) {
    width: 300px;
    padding: 8px 20px;
  }
`;

export const CradTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin: 0;
  padding: 0;
  @media (max-width: 1060px) {
    font-size: 24px;
  }
`;
export const CardText = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
  @media (max-width: 1060px) {
    font-size: 13px;
    width: 331px;
  }
  @media (max-width: 350px) {
    width: 280px;
  }
`;
export const CardImage = styled.div``;
export const CardService = styled.div`
  display: flex;
  max-width: 860px;
  justify-content: space-between;
  // @media (max-width:1060px){
  //     flex-direction: column;
  //     align-items: baseline;
  // }
`;
export const CardServiceBlock = styled.div`
  @media (max-width: 1060px) {
    &:last-child {
      display: none;
    }
  }
`;
export const CardServiceHeading = styled.h3`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
export const CardServiceText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  opacity: 0.5;
  @media (max-width: 450px) {
    font-size: 13px;
    max-width: 133px;
  }
`;
export const CardBtns = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 84%;
`;
export const HorizontalSliderButton = styled.div`
  max-width: 270px;
  width: 100%;
  span {
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    transition: all 0.4s ease-out;
  }
  @media (max-width: 1060px) {
    display: none;
  }
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-decoration: none;
    border: 2px solid #0d4656;
    padding: 10px 20px;
    display: inline-block;
    width: 50px;
    position: relative;
    transition: width 0.4s ease-out;
  }

  &:hover {
    a {
      width: 95%;
    }
    span {
      opacity: 1;
      visibility: visible;
      transition: width 0.4s linear;
    }
  }
  .arrow-right {
    transition: width 0.4s linear;
    position: absolute;
    top: 50%;
    right: -16px;
    transform: translateY(-50%);
    background-color: #fff;
  }
`;

export const CardButton = styled.button`
  border: none;
  background: #f0803d;
  padding: 14px 40px 15px;
  color: #fff;
  cursor: pointer;
  @media (max-width: 425px) {
    padding: 7px 20px 7px;
  }
`;
export const CardBodyContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1060px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
