import styled from "styled-components";

export const ContactsHomeBG = styled.div`
  background: #0d4656;
  padding: 88px 0 0px 16px;
  @media (max-width: 1024px) {
    background: url("./contactssss.png");
    background-repeat: no-repeat;
    padding: 500px 0 0 0;
  }
`;

export const ContactsHomeBlock = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    background: #0d4656;
    padding: 0;
  }
`;

export const ContactsBlock = styled.div`
  width: 576px;
  padding: 30px 30px;
  @media(max-width:500px){
  padding: 30px 18px;

  }
`;
export const ContactsBlockHeading = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  text-transform: uppercase;

  color: #ffffff;
  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    
  }
`;
export const ContactsBlockSlogan = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #ffffff;
  @media (max-width: 425px) {
    font-size: 21px;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

export const ContactsBlockLokations = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

//
export const ConImg = styled.div`
  max-width: 1344px;
  max-height: 690px;
  /* @media (max-width: 1024px) {
    display: none;
  } */
  width: 100%;
  height: 100%;
  img {
    width: 1344px;
    height: 690px;
    object-fit: cover;
  }
  @media(max-width:500px){
    display: none;
  }
`;
