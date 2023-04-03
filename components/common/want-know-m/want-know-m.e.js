import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  padding: 40px 50px;
  .swiper {
    width: 100%;
  }
  @media (max-width: 770px) {
    padding: 5% 5.5%;
  }

  .section-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    @media (max-width: 900px) {
      position: static;
    }
    @media (max-width: 770px) {
      margin-bottom: 20px;
    }
  }
`;
export const InnerWrapper = styled.div`
  /* max-width: 1270px; */
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const SliderRow = styled.div`
  display: flex;
  /* align-items: center; */
  position: relative;
  @media (max-width: 770px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    height: 450px;
  }
`;
export const SliderLeft = styled.div`
  width: 55%;
  padding-right: 5%;
  background-color: #0d4656;;
  .swiper {
    padding-top: 80px;
    margin-top: 20px;
    @media (max-width: 1366px) {
      padding-top: 50px;
      margin-top: 50px;
    }
    @media (max-width: 900px) {
      padding-top: 0px;
    }
    @media (max-width: 770px) {
      margin-top: 10px;
    }
  }

  .slider-buttons {
    display: flex;
    position: absolute;
    top: 607px;
    right: 45px;
    z-index: 100;

    @media (max-width: 900px) {
      display: none;
    }
    &.nav {
      background-color: red;
    }
  }
  .nav {
    height: 50px;
    width: 50px;
    border: 2px solid #fff;
    position: relative;
    transition: all 0.4s ease-in-out;
    &.nav-left {
      margin-left: 45px;
      margin-right: 50px;
    }
    &:hover {
      border-color: #f0803d;
      cursor: pointer;
      .arrow-right {
        right: -45px;
      }
      .arrow-left {
        left: -45px;
      }
    }
    .svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #0d4656;
    }
    .arrow-right {
      right: -35px;
      transition: all 0.4s ease-in-out;
    }
    .arrow-left {
      left: -35px;
      transform: rotate(-180deg) translateY(50%);
      transition: left 0.4s ease-in-out;
    }
    @media (max-width: 1366px) {
      height: 40px;
      width: 40px;
      &.nav-left {
        margin-left: 30px;
        margin-right: 40px;
      }
      &:hover {
        .arrow-right {
          right: -30px;
        }
        .arrow-left {
          left: -30px;
        }
      }
      .svg {
        width: 30px;
      }
      .arrow-left {
        left: -25px;
      }
      .arrow-right {
        right: -25px;
      }
    }
  }
  @media (max-width: 770px) {
    position: absolute;
    top: 0;
    width: 100%;
    padding-right: 0;
    z-index: 5;
    padding:0;
  }
`;
export const SliderRight = styled.div`
  width: 45%;
  @media (max-width: 770px) {
    position: absolute;
    top: 0;
    width: 100%;
    padding-right: 0;
    z-index: 1;
    .swiper-slide {
      position: relative;
      &::before {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: block;
        content: "";
        z-index: 10;
      }
    }
  }
`;
export const SliderImage = styled.div`
  max-height: 680px;
  height: 680px;
  span {
    height: 100% !important;
    width: 100% !important;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1440px) {
    height: 600px;
  }
  @media (max-width: 1366px) {
    height: 500px;
  }
  @media (max-width: 900px) {
    height: 400px;
  }
  @media(max-width:550px){
    height:0 ;
  }
`;

export const SliderTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  background: #0d4656;
  padding-bottom: 20px;
  @media (max-width: 1800px) {
    font-size: calc(16px + 30 * (100vw / 1920));
  }
  @media (max-width: 1366px) {
    line-height: 110%;
  }
  @media (max-width: 1366px) {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    background: transparent;
  }
`;
export const SliderDescription = styled.p`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  background: #0d4656;

  @media (max-width: 1800px) {
    font-size: calc(14px + 10 * (100vw / 1920));
  }
  @media (max-width: 900px) {
    font-size: 14px;
    background: transparent;
  }
  @media (max-width: 768px) {
    background: transparent;
  }
`;
export const SliderButton = styled.div`
  position: relative;
  background:  #0d4656;
  padding: 40px 0;
  max-width: 270px;
  width: 100%;
  @media (max-width: 1366px) {
    margin-top: 20px;
  }
  span {
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    transition: all 0.4s ease-out;
  }

  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 10px 20px;
    display: inline-block;
    width: 50px;
    position: relative;
    right: 0;
    transition: width 0.4s ease-out;

    @media (max-width: 1800px) {
      font-size: calc(14px + 10 * (100vw / 1920));
    }
    @media (max-width: 1366px) {
      line-height: 100%;
      padding: 12px 16px;
    }
  }
  &:hover {
    a {
      width: 95%;
    }
    span {
      opacity: 1;
      visibility: visible;
    }
  }
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -35px;
    transition: all 0.4s ease-out;
    background-color: #0d4656;
    @media (max-width: 768px) {
      background-color: transparent;
    }
  }
`;
export const WANTbg = styled.div`   
  height: 600px;
  background-color:  #0d4656;
  @media(max-width:425px){
    height: inherit;
  }
`