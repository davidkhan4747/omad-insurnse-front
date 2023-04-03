import styled from "styled-components";

export const Wrapper = styled.div`
  .swiper-wrapper {
    margin-top: 50px;
  }
  .slider-buttons {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;

    @media (max-width: 900px) {
      display: none;
    }
  }
  .nav {
    height: 50px;
    width: 50px;
    border: 2px solid #0d4656;
    position: relative;
    transition: all 0.4s ease-in-out;
    &.nav-right {
      margin-left: 50px;
      margin-right: 45px;
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
      background-color: #fff;
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
      &.nav-right {
        margin-left: 40px;
        margin-right: 30px;
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
  .slider-row {
    display: flex;
    justify-content: space-between;
    width:100% ;
    flex-wrap: wrap;
    @media(max-width:1200px){
      flex-direction: column ;
    }
  }
  .slider-item {
    display: flex;
    justify-content: space-between;
    max-width: 45%;
    align-items: flex-end;
    margin-bottom: 50px;
    @media(max-width:1200px){
      flex-direction: column ;
      max-width:100% ;
    }
  }
  .slider-img {
    max-width: 40%;
    width: 100%;
    @media(max-width:1200px){
      max-width:100% ;
    }
    .image {
      width: 240px;
      height: 240px;
      @media(max-width:1200px){
      width:100% ;
    }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    span {
      height: 100% !important;
      width: 100% !important;
    }
    img {
      object-fit: cover;
      object-position: center;
    }
  }
  .slider-content {
    max-width: 55%;
    width: 100%;
    @media(max-width:1200px){
      max-width:100% ;
    }
    &__name {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
      margin: 0;
      margin-bottom: 20px;
    }
    &__text {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      margin: 0;
    }
  }
`;
