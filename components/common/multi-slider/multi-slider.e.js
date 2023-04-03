import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 1px solid #000 !important;
  .swiper-pagination {
    bottom: 50px;
    @media(max-width:425px){
      display: none;
    }
  }
  .swiper-pagination-bullet {
    height: 25px;
    width: 2px;
    background-color: #f0803d;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #0d4656;
  }

  @media screen and (min-width: 640px) {
    .swiper-container {
      width: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 50%;
    }
  }
`;

export const SliderBtn = styled.button`
  z-index: 10;
  max-width: 110px;
  width: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  &.left-btn {
    text-align: right;
    position: relative;
    .slider-wrapper {
      position: absolute;
      right: 0;
    }
  }
  &:first-child {
    margin-right: 170px;
  }

  .slider-wrapper {
    &:hover {
      cursor: pointer;
      width: ${(props) => (props.active ? "100%" : "auto")};
      .btn {
        opacity: 0;
      }
    }
  }
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #f1f1f1;
    transition: all 0.4s ease-out;
    opacity: 1;
  }
  .arrow-left {
    left: -30%; 
  }
  .arrow-right {
    left: 50%;
  }
  &[disabled] {
    &:hover {
      cursor: initial;
    }
    opacity: 1;
  }
`;
export const SliderText = styled.span`
  opacity: ${(props) => (!props.active ? "0" : "1")};
  display: inline-block;
  padding: 0 20px;
  transition: all 0.4s ease-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media(max-width:425px){
    display: none;
  }
  
`;
export const SliderBtnWrapper = styled.div`
  border: 1px solid #0d4656;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: transparent;
  transition: all 0.4s ease-out;
  @media (max-width: 1366px) {
    height: 40px;
    width: 40px;
    .btn {
      width: 30px;
    }
  }
`;
export const SliderBtnRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f1f1f1;
  border-top: 1px solid #0d4656;
  padding: 40px 50px;
/* 
  div{
    width: 6000px;
  } */
  @media(max-width:425px){
    padding: 36px 26px;
  }
`;
export const BlovkButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 700px;

`
