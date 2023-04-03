import styled from "styled-components";



export const Wrapper = styled.div`
  border-right: 1px solid #0d4656;
  a {
    padding: 40px 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 630px;
    -webkit-text-decoration: none;
    text-decoration: none;
    position: relative;
    width: 100%;

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
      min-height: 449px;
      padding: 20px 30px;
    }
    @media (max-width: 580px) {
      padding: 20px 18px;
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
  padding: 0;
  margin-bottom: 75px;
  @media (max-width: 1680px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    /* padding-left: 18px; */
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
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1680px) {
    height: 190px;
  }
  @media (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 508px) {
    height: 190px;

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
  transition: 0.3s all linear;
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
  &:hover {
    background:  #F0803D;;

  }
`;

export const CardContent = styled.p`
  color: #000000;
  margin: 0;
  padding: 0 ;
  opacity: 0.5;
  
`