import styled from 'styled-components';

export const GWrapper = styled.div`
  max-width: 1820px;
  width: 100%;
  margin: 0 auto;
  padding: 0.1px;
  @media (max-width: 1800px) {
    max-width: 93%;
  }
  @media(max-width:500px){
    max-width: 89%;

  }
`;
export const MWrapper = styled.div`
  max-width: 1478px;
  width: 100%;

  margin: 0 auto;
  @media (max-width: 1800px) {
    max-width: 95%;
  }
  p {
    img {
    @media(max-width:500px){
      width:100% ;
      max-width:100% ;
      height: 300px ;
    }
  }
  }
 
`;
export const Wrapper = styled.div`

  .bg-blue {
    background-color: #0d4656;
  }
`;

