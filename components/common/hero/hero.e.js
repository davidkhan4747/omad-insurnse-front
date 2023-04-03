import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  &::before {
    display: block;
    content: "";
    height: 450px;
    width: 1px;
    background-color: #fff;
    position: absolute;
    top: 80px;
    left: 542px;
    z-index: 5;
  }
  &.SWPdd {
    padding: 20px;
  }
  @media (max-width: 1500px) {
    &::before {
      height: 320px;
    }
  }
  @media (max-width: 1366px) {
    &::before {
      height: 45%;
      left: 505px;
    }
  }
  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }

  .container {
    position: relative;
  }
  .swiper {
    width: 100%;
    height: 100%;
    background: #0d4656;
  }
  
  .slider-description {
    width: 680px;
    height: auto;

    background: #0d4656;
    position: absolute;
    left: 0;
    bottom: 40px;
    z-index: 5;
    padding: 40px 50px;
    @media (max-width: 1366px) {
      padding: 20px 30px;
      width: 620px;
    }

    &-item {
      max-width: 455px;
      width: 100%;
    }

    &__title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 42px;
      color: #ffffff;
      margin: 0;
      margin-bottom: 20px;
      @media (max-width: 1800px) {
        font-size: calc(16px + 20 * (100vw / 1920));
      }
    }
    &__content {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
      margin: 0;
      @media (max-width: 1800px) {
        font-size: calc(14px + 4 * (100vw / 1920));
      }
    }
    &__line {
      position: absolute;
      top: 0;
      right: 15%;
      height: 100%;
      width: 1px;
      /* background-color: rgba(255, 255, 255, 0.5); */
      .line {
        position: absolute;
        bottom: 0;
        height: 0;
        /* background-color: #fff; */
        width: 1px;
        transition: height 4.5s ease-out;
      }
      @keyframes mymove {
        from {
          height: 0;
        }
        to {
          height: 100%;
        }
      }
    }
    &__line.active {
      .line {
        height: 100%;
      }
    }
    &__buttons {
      text-align: right;
      padding-top: 25px;
      max-width: 50px;
      width: 100%;
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
      min-height: 160px;
    }
    .swiper-pagination {
      text-align: center;
      width: auto;
      left: auto;
      right: 5px;
      bottom: 0px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    .slider-description {
      width: 100%;
      height: auto;
      padding: 30px 18px 30px 0px;
    }
    .slider-description-item {
      max-width: 80%;
    }
    .slider-description__title {
      margin-bottom: 15px;
      line-height: 100%;
    }
  }
`;
export const HeroTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  padding-left: 50px;
  display: inline-block;
  position: relative;
  z-index: 5;
  padding-top: 120px;
  padding-left: 600px;

  @media (max-width: 1800px) {
    font-size: calc(24px + 48 * (100vw / 1920));
  }
  @media (max-width: 1366px) {
    padding-left: 50px;
    line-height: 115%;
  }
  @media (max-width: 768px) {
    padding-left: 5%;
  }
`;

export const SliderDescriptionBtn = styled.button`
  border: 2px solid #fff;
  height: 50px;
  width: 50px;
  background-color: transparent;
  transition: border-color 0.3s ease-out;

  @media (max-width: 1366px) {
    height: 40px;
    width: 40px;
  }

  .arrow-top {
    background-color: #0d4656;
    transform: translateY(-60%);
    @media (max-width: 1366px) {
      height: 30px;
    }
  }
  .arrow-bottom {
    transform: rotate(-180deg) translateY(-60%);
    background-color: #0d4656;
    @media (max-width: 1366px) {
      height: 30px;
    }
  }
  &:first-child {
    margin-bottom: 20px;
  }
  &:hover {
    border-color: #f0803d;
    cursor: pointer;
  }
`;

export const SliderImg = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  span {
    height: 100% !important;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
