import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #0d4656;
  @media (max-width: 1200px) {
    &.view-three {
      .wrapper-categories {
        max-width: 33.33%;
      }
      .wrapper-tags {
        max-width: 66.66%;
      }
    }
  }
  @media (max-width: 1024px) {
    &.view-three {
      .wrapper-categories {
        max-width: 100%;
        padding: 2% 5.5% 0;
        border-right: 0;
      }
      .wrapper-tags {
        max-width: 100%;
        padding: 5% 0;
      }
    }
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const WrapperCategories = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
  padding-left: 50px;
  max-width: 25%;
  width: 100%;
  border-right: 2px solid #fff;
  @media (max-width: 1800px) {
    padding-left: 2.5%;
    padding-top: 2%;
    padding-bottom: 6%;
    padding-left: 2.5%;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }
  @media (max-width: 550px) {
    border-right: 0;
  }
`;

export const WrapperTags = styled.div`
  padding: 40px 50px;
  max-width: 75%;
  width: 100%;

  @media (max-width: 1800px) {
    padding: 3% 5%;
  }
`;
export const TagsTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fff !important;
  /* background-color: #f0803d; */
  padding: 10px 20px;
  margin-bottom: 20px;
  margin-left : 20px;
  border: 2px solid #f0803d;
  display: inline-block;
  cursor: pointer;
  &:hover{
    background-color: #f0803d;
  }
  a {
    color : #ffff;
    &:hover {
    }
  }
    &.All{
      background-color: #f0803d;
    }
  @media (max-width: 1800px) {
    font-size: calc(14px + 2 * (100vw / 1920));
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 20px 0;
    padding: 7px 15px;
  }
`;
export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 20px 0 0 20px;
  font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding: 10px 20px;
    border: 2px solid #f0803d;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease-out;
    p {
      margin: 0;
      padding: 0;
    }
    &:hover {
      background-color: #f0803d;
    }
    &.active{
      background-color: #f0803d;

    }
    
  a {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    // padding: 10px 20px;
    // border: 2px solid #f0803d;
    display: inline-block;
    text-decoration: none;
    transition: all 0.3s ease-out;

    &:hover {
      // background-color: #f0803d;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
