import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  .title {
    padding-left: 50px;
    position: relative;
    z-index: 5;
    padding-top: 40px;
    padding-left: 0;
  }
  .container {
    position: relative;
  }
  .news-image {
    position: absolute;
    top: 0;
    left: 0;
    span {
      height: 100% !important;
      width: 100%;
    }
    img {
      object-fit: cover;
      object-position: center;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .slider-description {
    width: 100%;
    height: 308px;
    max-height: 355px;
    max-width: 1095px;
    height: 100%;
    background: #0d4656;
    position: absolute;
    left: 0;
    bottom: 40px;
    z-index: 5;
    padding: 40px 50px;
    @media (max-width: 1800px) {
      max-width: 75%;
      
    }
    @media (max-width: 1024px) {
      height: auto;
    }
    @media (max-width: 770px) {
      max-width: 100%;
    }
    @media(max-width:360px ){
      padding: 5px 30px 5px 18px !important;

    }
    .news-date {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      align-items: flex-end;
      transform: translateY(40px);
      .month {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
        @media (max-width: 1800px) {
          font-size: calc(18px + 6 * (100vw / 1920));
        }

        color: #ffffff;
        span {
          font-size: 72px;
          color: #f0803d;
          display: inline-block;
          margin-right: 20px;
          @media (max-width: 1800px) {
            font-size: calc(35px + 37 * (100vw / 1920));
          }
        }
      }
      .year {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #ffffff;
        padding-right: 770px;
    padding-bottom: 1px;  

        @media(max-width:500px){
          padding-right: 165px;
    padding-bottom: 3px;  
        }
      }
    }
    &__row {
    }
    @media (max-width: 1366px) {
      padding: 20px 30px 20px 9px;

    }
    @media (max-width: 566px) {
      padding: 20px 30px 20px 18px;

    }
    &-item {
      max-width: 840px;
      width: 100%;
      padding-top: 45px;
      @media (max-width: 1800px) {
        max-width: 80%;
        margin: 20px 0;
      }
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
      @media (max-width: 1024px) {
        margin-bottom: 10px;
        line-height: 110%;
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
      @media (max-width: 500px) {
        display: none;
      }
    }
    &__line {
      position: absolute;
      top: 0;
      right: 15%;
      height: 100%;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.5);
      display: none;
      @media (max-width: 1800px) {
        right: 11%;
      }
      
      .line {
        position: absolute;
        bottom: 0;
        height: 0;
        background-color: #fff;
        width: 1px;
        transition: height 4.5s ease-out;
        /* animation: mymove 2s infinite; */
        /* animation-delay: 3s; */
        display: none;
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
      /* transform: translateX(-150%); */
      z-index: 10;
      position: absolute;
      top: 0;
      right: 0;
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
`;
export const HeroTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  margin: 0;
  padding-left: 50px;
  display: inline-block;
  position: relative;
  z-index: 5;
  padding-top: 40px;
  padding-left: 0;
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
  @media(max-width:500px){
     left: -350px;
     width: auto;

    }
  img {
    width: 100%;
    @media(max-width:500px){
      object-fit: cover;
      height: 100%;
      width: 100%;

    }
  }
`;
