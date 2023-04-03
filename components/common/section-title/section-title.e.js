import styled from "styled-components";
export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: ${(props) => (props.color == "white" ? "#fff" : "#000")};
  margin: 25px 0;
  @media (max-width: 1800px) {
    font-size: calc(16px + 20 * (100vw / 1920));
  }
  @media (max-width: 1440px) {
    line-height: 110%;
  }
  /* @media (max-width: 500px) {
    display:none;
} */
`;
