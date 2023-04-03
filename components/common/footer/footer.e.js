import styled from "styled-components";
// the footer should have a background color of #0D4656
// Footer should have a padding of 20px
// Footer has .footer-container class, its display should be flex and text align left and color white
// inside of the .footer-container class there are .footer-columns classess, each has 20px padding
// inside of the .footer-columns class there are h3 tags, each has a font size of 16px and line height of 1.2, color #FF8136
// inside of the .footer-columns class there are ul tags, each has a font size of 12px and line height of 1.2, color white and its list-style-type is none

export const Wrapper = styled.div`
  background-color: #0d4656;
  padding-top: 60px;
  padding-bottom: 20px;
  width: 100%;

  .footer-container {
    display: flex;
    text-align: left;
    justify-content: space-between;
    color: white;
  }
  @media (max-width: 768px) {
    .footer-container,
    .c-column {
      display: none;
    }
  }
`;
export const FooterColumn = styled.div`
  padding: 0 10px;
  min-width: 150px;
  .social-net {
    display: flex;
    max-width: 160px;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-bottom: 5px;
  }
  .maillink {
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    font-family: Montserrat;
  }
  @media (max-width: 1441px) {
    min-width: 120px;
  }
  @media (max-width: 1024px) {
    .social-net {
      max-width: 110px;
    }
    .maillink {
      font-size: 12px;
    }
  }
`;
export const ColumnHeader = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.2;
  color: #ff8136;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const FooterUL = styled.ul`
  font-size: 18px;
  line-height: 1.2;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  li {
    padding-top: 20px;
    color: white;
    margin-left: 0;
    padding-left: 0;
    text-align: left;

    a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: #f0803d;
      }
    }
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    li {
      padding-top: 10px;
    }
  }
`;
export const NumAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  span:first-child {
    font-weight: 200;
    font-size: 24px;
    line-height: 28px;
  }
  span:last-child {
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    font-family: Montserrat;
    margin-top: 5px;
  }
  @media (max-width: 1024px) {
    span:first-child {
      font-size: 14px;
    }
    span:last-child {
      font-size: 10px;
      margin-top: 5px;
    }
  }
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  margin-top: 155px;
  align-items: center;
  span {
    font-weight: 200;
    font-size: 18px;
    line-height: 21px;
    font-family: Montserrat;
    color: white;
  }
  @media (max-width: 1024px) {
    margin-top: 22px;
    span {
      font-size: 12px;
      width: 40%;
    }
  }
  .khan {
    display: none;
  }
`;
