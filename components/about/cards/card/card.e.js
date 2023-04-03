import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 25%;
  width: 100%;
  padding: 40px 50px;
  border-right: 2px solid #000;
  border-bottom: 1px solid #000;
  background-color: #fff;

  &:last-child {
    border-right: 0;
  }
  @media (max-width: 1800px) {
    padding: 2% 2.5%;
  }
  @media (max-width: 1030px) {
    max-width: 50%;
    &:nth-child(2) {
      border-right: 0;
    }
  }
  @media (max-width: 550px) {
    max-width: 100%;
    border-right: 0;
  }
`;
export const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const CardTitle = styled.h4`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  @media (max-width: 1800px) {
    font-size: calc(18px + 6 * (100vw / 1920));
  }
`;
export const CardIcon = styled.div`
  height: 100px;
  @media (max-width: 1600px) {
    height: 70px;
  }
  @media (max-width: 550px) {
    height: 60px;
  }
  span {
    height: 100% !important;
    width: auto !important;
  }
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
export const CardTags = styled.div`
  padding-bottom: 110px;
  @media (max-width: 1800px) {
    padding-bottom: 30%;
  }
  @media (max-width: 1220px) {
    padding-bottom: 15%;
  }
`;
export const CardTag = styled.p`
  margin: 0;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  a {
    background-color: #0d4656;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    display: inline-block;
    margin: 0;
    padding: 10px 20px;
  }
`;
