import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  padding: 100px 0 50px;
  @media (max-width: 1800px) {
    padding: 7% 0 3%;
  }
  @media (max-width: 1500px) {
    padding: 5% 0 2.5%;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .title {
    margin-bottom: 50px;
    position: relative;
    z-index: 5;
    @media (max-width: 1400px) {
      margin-bottom: 25px;
    }
  }
`;
export const SaleTitle = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;
export const SaleRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 800px;
  overflow: hidden;
  @media (max-width: 1800px) {
    height: 700px;
  }
  @media (max-width: 1500px) {
    height: 600px;
  }
  @media (max-width: 1400px) {
    height: auto;
  }
`;
export const VerticalSlider = styled.div`
  max-width: 20%;
  width: 100%;
  height: 100%;
  @media (max-width: 1400px) {
    max-width: 100%;
    order: 2;
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    width: 200px;
    transition: all 200ms linear;
    @media (max-width: 1800px) {
      width: 175px;
    }

    span {
      width: 100% !important;
      height: 100% !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &::before {
      position: absolute;
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      /* background-color: #f0803d; */
      top: -20px;
      left: 0;
    }
    &::after {
      position: absolute;
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      background-color: #f0803d;
      bottom: -20px;
      left: 0;
    }
    @media (max-width: 1400px) {
      height: 110% !important;
      &::before {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #f07f3d71;
        z-index: 1000;
      }
      &::after {
        height: 2px;
      }
    }
  }
  .swiper-slide-thumb-active {
    width: 300px;

    @media (min-width: 1500px) {
      height: 150px !important;
    }
    @media (max-width: 1800px) {
      width: 250px;
    }
    @media (max-width: 1400px) {
      &::before {
        height: 100%;
      }
      &::after {
        height: 2px;
      }
    }
    &::before {
      height: 2px;
    }
    &::after {
      height: 2px;
    }
  }
`;
export const HorizontalSlider = styled.div`
  max-width: 80%;
  width: 100%;
  transform: translateY(-100px);
  z-index: 1;
  @media (max-width: 1400px) {
    max-width: 100%;
    order: 1;
    transform: translateY(0);
    margin-bottom: 30px;
  }
`;
export const HorizontalSliderRow = styled.div`
  display: flex;
  @media(max-width:500px){
    flex-direction: column-reverse;
  }
`;
export const HorizontalSliderLeft = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 100px 50px;
  position: relative;
  @media (max-width: 1400px) {
    max-width: 60%;
  }
  @media (max-width: 1300px) {
    padding: 4% 2.5%;
  }
  @media(max-width:500px){
    max-width:100%;
    padding: 4% 0%;

  }
`;
export const HorizontalSliderRight = styled.div`
  max-width: 50%;
  width: 100%;
  z-index: 100;
  @media (max-width: 1400px) {
    max-width: 40%;
  }
  @media(max-width:500px){
    max-width:100%;
  }
`;
export const HorizontalSliderTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;
  margin-bottom: 40px;
  @media (max-width: 1800px) {
    font-size: calc(16px + 30 * (100vw / 1920));
  }
  @media (max-width: 1024px) {
    line-height: 100%;
    margin-bottom: 20px;
  }
`;
export const HorizontalSliderDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 0;
  @media (max-width: 1800px) {
    font-size: calc(12px + 10 * (100vw / 1920));
  }
  @media(max-width:500px){
    margin:0 0 90px 0;
    line-height: 20px;


  }
`;
export const HorizontalSliderButton = styled.div`
  position: absolute;
  bottom: 20%;
  right: 50px;
  max-width: 270px;
  width: 100%;
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
    color: #000000;
    text-decoration: none;
    border: 2px solid #0d4656;
    padding: 10px 20px;
    display: inline-block;
    width: 50px;
    position: absolute;
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
    right: -50%;
    transition: all 0.4s ease-out;
    background-color: #e5e5e5;
  }
`;
export const HorizontalSliderImage = styled.div`
  height: 798px;
  width: 100%;
  @media (max-width: 1800px) {
    height: 700px;
  }
  @media (max-width: 1500px) {
    height: 600px;
  }
  @media (max-width: 1400px) {
    height: 450px;
  }
  @media (max-width: 1024px) {
    height: 350px;
  }
  span {
    height: 100% !important;
  }
  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
