import styled from "styled-components";

export const SponsrBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 107%;
  /* max-width: 990px; */
  padding: 20px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const ImageCard = styled.div`
  height: 200px;
  width: 200px;
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;
export const SponsorTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;

  color: #000000;
  @media (max-width: 425px) {
    line-height: 22px;
    font-size: 20px;
    padding: 5px;
    font-weight: 600;
  }
`;
export const SponsorTitleItem = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  max-width: 697px;

  color: #000000;
  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 23px;
    padding: 5px;
  }
`;
