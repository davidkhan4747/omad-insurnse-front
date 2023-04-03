import { TextField } from '@mui/material'   
import styled from 'styled-components'

export const GlobalFormBody = styled.div`
    width: 1318px;
    padding: 40px 50px;
    border-top: 5px solid #000000;
    margin: 0px auto;
    margin-top: 50px;
    background-color: #ffff;
    @media(max-width:425px){
        width: 330px;
        padding: 20px 25px;
        border-top: 2px solid #000000;

    }
`
export const PrBlock = styled.div`
    width: 600px;
`
export const HeIs = styled.h1`
    font-size: 36px;
    line-height: 42px;
    font-style: normal;
font-weight: normal;
    color: #000000;
    @media(max-width:425px){
      
    font-size: 18px;
        

    }
`
export const StepIn = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

`
export const FormTitle = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */


    color: #000000;
    @media(max-width:425px){
        font-size: 20px;
        width: 232px;

    }

`
export const FormInfo = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin-top:40px;
    line-height: 28px;

    color: #000000;
    @media(max-width:425px){
        font-size: 20px;

    }

    /* opacity: 0.5; */
`
export const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
// Заполните до показа стоимости:
export const CostBlock = styled.div`
    width:  280px;
    @media(max-width:760px){
        display: none;
    }
`
export const ThisCost = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #000000;
`
export const CostValue = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */


    color: #000000;

`
export const CostInfo = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
`
//  Заполните до показа стоимости:
export const FormBlock = styled.div`
    width: 781px;
    @media(max-width:425px){
        width: 300px;
    }
`
export const CostS = styled.div`
    width: 93px;
    height: 6px;
    background: #F0803D;

    &.i80{
    width: 173px;

    }
    &.i100{
    width: 100%;

    }
`
export const AvtoModel = styled(TextField)`
    background: #F1F1F1;
    width: 780px;
`
// cars models , marks , ...
export const CarsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width:425px){
        flex-direction: column;
    }
`

export const  BrandCar =  styled(TextField)`
    background: #F1F1F1;
    width: 227px;
    @media(max-widtH:425px){
        margin: 5px 0 !important;
    }
`
export const ModelCar = styled(TextField)`
     background: #F1F1F1;
    width: 227px;
    @media(max-widtH:425px){
        margin: 5px 0 !important;
    }
`
export const Engine = styled(TextField)`
    background: #F1F1F1;
    width: 100%;
    margin: 10px 0 !important;
    @media(max-widtH:425px){
        margin: 5px 0 !important;
        width: 225px;

    }
`
export const RegionUsage = styled(TextField)`
    width: 100%;
    background: #F1F1F1;
    margin:20px 0 40px 0 ;
    @media(max-widtH:425px){
        width: 225px;

    }
`
export const FormButtonBlock = styled.div`
    border-top: 1px solid #000000;;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 780px;
    /* padding: 40px 0; */
    @media(max-width:425px){
        width: 250px;
    }
`
export const FormBtnCheck = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 ;
  max-width: 780px;

  .label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  @media(max-width:425px){
    flex-direction: column-reverse;
  }
  a {
    text-decoration: underline;
  }
`;

export const FormInsBtn = styled.button`
    background: #F0803D;
    padding: 14px 40px;
    border: none;
    color:#fff;
    cursor: pointer;
    font-size: 18px;
    &[disabled] {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
`
export const Avto = styled.div`
    
`

// INSURNSE BLOCK !!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------- !!!!!!!!
export const InfoUser = styled.div`
    display: flex;
    justify-content: space-between;
    /* padding: 20px 0; */
    flex-wrap: wrap;
    align-items: center;
    @media(max-width:425px){
        flex-direction: column;
        width: 200px;
    }
`
export const FormsUser = styled(TextField)`
    width: 365px;
    background-color: #f1f1f1;
    margin: 10px 0 !important ;
        @media(max-width:428px){
            width: 225px;
        }
`
export const FormUserD = styled(TextField)`
    background-color: #f1f1f1;
    margin: 10px 0 !important ;
    width: 100% ;
    @media(max-width:425px){
        width: 248px;
    }
`
export const CheckDTp = styled.p`
    padding: 7px 58px;
    border-radius: 3px;
    display: flex;
    width: 360px;

    border: 1px solid #000;
    align-items: center;
    justify-content: space-between;
    @media(max-width:428px){
            width: 225px;
            padding: 0px 18px;

        }
`
export const UserStr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:425px){
        display: block;
}
`
export const UserNumber = styled(TextField)`
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 365px;
    border: none;
    margin:20px 0  !important;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media(max-width:425px){
        width:248px;  
    }
       
`
export const FormsDrop = styled.select`
    width: 365px;
    padding: 16px 5px;
    background: #F1F1F1;
    border-radius: 3px;
    border: 1px solid #b9b9b9;

    @media(max-width:425px){
        width: 248px;
    }
    &.high {
        width: 680px;
        @media(max-width:425px){
        width: 248px;
    }
    }

`
export const UserDataBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FlexBlock = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width:425px){
        flex-direction: column;
    }
    &.low{
        width: 600px;
    }
`