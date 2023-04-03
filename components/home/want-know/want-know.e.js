import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  position: relative;
  .title {
    transform: translateY(40px);
    margin-top: 40px;
  }
  @media (max-width: 1030px) {
    display: none;
  }
`;
export const WrapperMob = styled.div`
  display: none;
  @media (max-width: 1030px) {
    display: block;
  }
`;

export const KnowRow = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1400px) {
    justify-content: flex-start;
  }
`;
export const KnowList = styled.ul`
  list-style: none;
  padding: 100px 0 170px 50px;

  margin: 0;
  position: relative;
  @media (max-width: 1400px) {
    padding-left: 0;
    padding-top: 7%;
  }

  &::before {
    display: block;
    content: "";
    height: 100%;
    width: 1px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1400px) {
      display: none;
    }
  }
  .box-out {
    height: 40px;
    width: 40px;
    border: 2px solid #f0803d;
    position: absolute;
    top: 100px;
    transition: all 0.3s ease-out;
    &.box2 {
      top: 200px;
    }
    &.box3 {
      top: 300px;
    }
    &.box4 {
      top: 400px;
    }
    &.box5 {
      top: 500px;
    }
    @media (max-width: 1400px) {
      &.box2 {
        top: 170px;
      }
      &.box3 {
        top: 250px;
      }
      &.box4 {
        top: 320px;
      }
      &.box5 {
        top: 400px;
      }
    }
  }
`;
export const KnowListItem = styled.li`
  margin-bottom: 40px;
  @media (max-width: 1400px) {
    margin-bottom: 20px;
  }
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease-out;
    @media (max-width: 1800px) {
      font-size: calc(18px + 30 * (100vw / 1920));
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  &.list-active {
    a {
      transition: 0.3s all ease-in;
      color:#f0803d ;
      transform: translateX(65px);
    }
  }
`;
export const VerticalSlider = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: row;
  height: 710px;
  max-width: 20%;
  width: 100%;
  transform: translateY(-50%);
  @media (max-width: 1400px) {
    height: 500px;
    max-width: 30%;
    .swiper {
      width: 100%;
    }
  }

  .swiper-wrapper {
    align-items: flex-end;
  }
  .swiper-slide {
    width: 320px;
    @media (max-width: 1800px) {
      width: 270px;
    }
    transition: all 200ms linear;

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
  }
  .swiper-slide-active {
    width: 430px;
    @media (max-width: 1400px) {
      width: 300px;
    }
  }
`;
