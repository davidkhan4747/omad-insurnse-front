import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40px;
  .title {
    margin-bottom: 40px;
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
    @media (max-width: 1800px) {
      font-size: calc(16px + 20 * (100vw / 1920));
    }
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
    .section__content {
      margin-bottom: 20px;
    }
    &__left {
      max-width: 60%;
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
  .news-center {
    display: flex;
    justify-content: space-between;
    padding-bottom: 120px;
    &__left {
      max-width: 60%;
      width: 100%;
    }
    &__right {
      max-width: 35%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__image {
      width: 918px;
      height: 686px;
      span {
        height: 100% !important;
        width: 100% !important;
      }
      img {
        object-fit: cover;
        object-position: center;
      }
    }

    &__item {
      display: flex;
      justify-content: space-between;
    }
    &__number {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 96px;
      line-height: 112px;
      color: #000000;
      margin-right: 20px;
    }
    &__text {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
      margin: 0;
      padding-top: 45px;
    }
  }
`;
