import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 120px;
  .title {
    margin-bottom: 40px;
  }
  .body-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 85px;
    @media(max-width:750px){
      flex-direction: column;
      width: 100%;
    }
    &__item {
      display: flex;
      max-width: 45%;
      width: 100%;
      margin-bottom: 35px;
      @media(max-width:750px){
      flex-direction: column;
      max-width: 100%;
    }
    }
    &__number {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 96px;
      line-height: 112px;
      color: #f1f1f1;
      background-color: #f0803d;
      width: 100px;
      height: 100px;
      max-width: 15%;
      position: relative;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      margin-right: 20px;
    }
    &__text {
      max-width: 85%;
    }
  }
  .body-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 85px;
    @media(max-width:750px){
      flex-direction: column;
      max-width: 100%;
    }
    .section__name {
      color: #ffffff;
    }
    .section__content {
      color: #ffffff;
      font-size: 18px;
      margin-bottom: 20px;
      position: relative;
      &:last-child {
        margin-bottom: 0px;
      }
      padding-left: 70px;
      &::before {
        position: absolute;
        display: block;
        content: "";
        left: 0;
        top: 50%;
        height: 2px;
        width: 50px;
        background-color: #fff;
        transform: translateY(-50%);
      }
    }
    &__item {
      max-width: 45%;
      width: 100%;
      background-color: #0d4656;
      padding: 40px 50px;
      margin-bottom: 35px;
      @media(max-width:750px){
      max-width: 100%;
    }
    }
  }
  .section__name {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin: 0;
    margin-bottom: 20px;
  }
  .section__content {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin: 0;
  }
  .body-center {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    @media(max-width:750px){
      flex-direction: column;
    }
    .section__content {
      margin-bottom: 20px;
    }
    &__left {
      max-width: 60%;
      @media(max-width:750px){
        max-width: 100%;

    }
    }
    &__right {
      max-width: 35%;
    }
    .section__image {
      width: 569px;
      height: 480px;
      span {
        width: 100% !important;
        height: 100% !important;
      }
      img {
        object-fit: cover;
      }
    }
  }
`;
