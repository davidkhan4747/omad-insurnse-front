import styled from "styled-components";

export const ContainerHero = styled.div`
  color: #ffffff;
  background: url(${(props) => props.imgUrl});
  height: 600px;
  // background-size:cover;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 780px) {
    /* background-position-x: -693px; */
  }
  @media (max-width: 600px) {
    /* background-position-x: -693px; */
  }
`;
export const HeroBgItem = styled.div`
  width: 976px;
  padding: 106px 0 0 182px;
  @media (max-width: 1150px) {
    padding: 119px 0 0px 151px;
    width: 870px;
  }
  @media (max-width: 880px) {
    width: 701px;
    padding: 94px 0px 0 9px;
  }
  @media (max-width: 750px) {
    padding: 140px 16px 0 0;
    width: 270px;
  }
`;
export const PageHeading = styled.h2`
  font-size: 72px;
  line-height: 84px;
  text-transform: uppercase;
  margin-top: 30px ;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffff;
  @media (max-width: 880px) {
    font-size: 66px;
  }
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;
export const PageText = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  margin-top: 1px;

  @media (max-width: 350px) {
    font-size: 14px;
  }
`;
