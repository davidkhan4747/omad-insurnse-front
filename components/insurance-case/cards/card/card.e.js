import styled from "styled-components";

export const Wrapper = styled.div`
  border-right: 0.3px solid #0000007b;
  border-bottom: 0.3px solid #0000007b;
  max-width: 25%;
  width: 100%;
  @media(max-width:425px){
    max-width: 100%;
  }
  a {
    padding: 40px 50px;
    display: flex;
    -webkit-text-decoration: none;
    text-decoration: none;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &::before {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #e5e5e5;
      width: 100%;
      height: 0%;
      opacity: 0.5;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: bottom;
      z-index: -1;
    }
    &:hover {
      &::before {
        height: 100%;
      }
    }
    @media (max-width: 1680px) {
      padding: 20px 30px;
      
    }
    @media(max-width:500px){
      padding: 20px 18px;

    }
  }
`;

export const WrapperTag = styled.div`
  border-right: 0.3px solid #000;
  border-bottom: 1px solid #000;
  max-width: 25%;
  width: 100%;
  padding: 40px 50px;
  @media (max-width: 425px) {
    padding: 20px 30px;
    max-width: 100%;

  }
  @media (max-width: 1680px) {
    padding: 20px 30px;
  }
`;
export const CardDesc = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  opacity: 0.5;
`;
export const CardTags = styled.div``;
export const CardTag = styled.div`
  display: inline-block;
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    background-color: #0d4656;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    margin: 0 20px 20px 0;
    transition: all 0.3s ease-out;
    &:hover {
      background-color: #f0803d;
    }
  }
`;

export const SliderTitle = styled.h4`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 20px;
  @media (max-width: 1800px) {
    font-size: calc(16px + 12 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const SliderList = styled.ul`
  margin-bottom: 75px;
  @media (max-width: 1680px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding-left: 18px;
    margin-bottom: 10px;
  }
`;
export const SliderListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
  @media (max-width: 1800px) {
    font-size: calc(14px + 14 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 16px;
  }
`;
export const SliderImg = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  span {
    height: 100% !important;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1680px) {
    height: 190px;
  }
  @media (max-width: 768px) {
    height: 120px;
  }
`;
export const SliderLink = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-decoration: none;
  background-color: #0d4656;
  padding: 20px;
  display: inline-block;
  @media (max-width: 1800px) {
    font-size: calc(14px + 14 * (100vw / 1920));
    line-height: 110%;
  }
  @media (max-width: 1680px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;
