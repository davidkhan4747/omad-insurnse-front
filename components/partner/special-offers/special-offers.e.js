import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #f1f1f1;
  overflow: hidden;
  .title {
    padding: 80px 0 40px;
    @media (max-width: 1800px) {
      padding: 4% 0 2%;
    }
  }

  .left-row {
    display: flex;
    &:first-child {
      border-bottom: 1px solid #000;
    }
  }
  .min-block {
    max-width: 33.33%;
    width: 100%;
    padding: 40px 50px;
    border-right: 1px solid #000;
    position: relative;
    @media (max-width: 1800px) {
      padding: 2% 2.5%;
    }
    @media (max-width: 1030px) {
      max-width: 50%;
    }
  }
  .max-block {
    max-width: 66.66%;
    width: 100%;
    padding: 40px 50px;
    border-right: 1px solid #000;
    position: relative;
    @media (max-width: 1800px) {
      padding: 2% 2.5%;
    }
    @media (max-width: 1030px) {
      max-width: 50%;
    }
  }
  .offers-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    color: #000000;
    transition: all 0.4s ease-out;
    z-index: 5;
    position: relative;
    @media (max-width: 1800px) {
      font-size: calc(14px + 10 * (100vw / 1920));
    }
    @media (max-width: 1440px) {
      font-size: 18px;
    }
  }
  .offers-description {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    height: 180px;
    width: 100%;
    margin-bottom: 40px;
    opacity: 0;
    transition: all 0.4s ease-out;
    z-index: 5;
    position: relative;
    @media (max-width: 1800px) {
      font-size: calc(13px + 5 * (100vw / 1920));
    }
    @media (max-width: 1440px) {
      font-size: 16px;
    }
    @media (max-width: 1030px) {
      font-size: 14px;
    }
  }
  .item-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    span {
      height: 100% !important;
      width: 100% !important;
    }
    img {
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: all 0.4s ease-out;
      height: 100%;
      width: 100%;
    }
  }

  .item {
    position: relative;
    &:hover {
      .offers-description {
        opacity: 1;
      }
      .offers-title {
        color: #fff;
      }
      .item-image {
        img {
          opacity: 1;
        }
      }
      .item-button {
        a {
          color: #fff;
          border-color: #fff;
          width: 95%;
        }
        .arrow-right {
          background-color: transparent;
        }
        span {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;
export const SpecialRow = styled.div`
  display: flex;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  flex-wrap: wrap;
`;
export const SpecialLeft = styled.div`
  max-width: 66.66%;
  width: 100%;
  @media (max-width: 1130px) {
    max-width: 100%;
  }
`;
export const SpecialRight = styled.div`
  max-width: 33.33%;
  width: 100%;
  padding: 40px 50px;
  position: relative;
  @media (max-width: 1800px) {
    padding: 2% 2.5%;
  }
  @media (max-width: 1130px) {
    max-width: 100%;
    border-top: 1px solid #000;
  }
`;
export const HorizontalSliderButton = styled.div`
  position: absolute;
  bottom: 90px;
  right: 50px;
  max-width: 270px;
  width: 100%;
  z-index: 5;
  @media (max-width: 1440px) {
    max-width: 190px;
  }
  span {
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    transition: all 0.4s ease-out;
    overflow: hidden;
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
      font-size: calc(13px + 10 * (100vw / 1920));
    }
    @media (max-width: 1440px) {
      padding: 8px 16px;
      font-size: 16px;
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
    background-color: #f1f1f1;
  }
`;
