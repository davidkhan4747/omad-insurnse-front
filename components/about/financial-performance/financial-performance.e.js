import styled from "styled-components";

export const FinancialBlock = styled.div`
    display: flex;
    /* height: 100px; */
`
export const FinancialYears  = styled.div`
   width: 474px;
    background-color:  #0D4656;
    text-align: center;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    padding: 24px 0;
    color: #FFFFFF;
    @media(max-width:425px){
    padding: 4px 0;
}
    &.active{
        background-color:  #F0803D;

    }
    


`
export const FinancialBlockTitle = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
    @media(max-width:425px){
    font-size: 26px;

    }
`
export const FinicialBloclContent = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    max-width: 947px;
    color: #000000;
    @media(max-width:425px){
    font-size: 16px;

    }

`
export const DownloadBlock = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width:425px){
        flex-direction: column;
    }
`
export const FinicialP = styled.p`
    color: #000;
    opacity: 0.5;
    margin:0;
    font-size: 20px;
`
export const  DwBlockBorder = styled.div`
    padding-bottom: 40px;
    
    border-bottom: 1px solid #000000;
`
export const DwBtnBlock = styled.div`
    text-align: right;
`
export const YearSpan = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;

    @media(max-width:425px){
        font-size: 14px;
    }
`