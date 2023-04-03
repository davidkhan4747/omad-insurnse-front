import styled from "styled-components";


export const FireLine = styled.div`
    min-width: 480px;
    border: 1px solid #000;
    max-height: 650px;
    background-color: #fff;
    padding: 40px 50px;
    @media(max-width:425px){
        min-width: auto;
    }
`
export const LineNumber = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    /* oooo */

    color: #F0803D;
    @media(max-width:425px){
        font-size: 20px;
}
`
export const Danger = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;


`
export const DangerDes = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

`
export const Punkts = styled.div`
    display: flex;
    max-width: 1200px;
    /* align-items: center; */
    @media(max-width:425px){
        flex-direction: column;
        justify-content: space-between;
    }
`
export const Punkt = styled.div`
    width: 100px;
    height: 100px;
    background-color: #F0803D;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 112px;
    margin-right: 25px;
    /* identical to box height */
    text-align: center;

    color: #F1F1F1;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    @media(max-width:425px){
        font-size: 40px;
        height: 60px;
        width: 160px;
        line-height: 52px;

        &::after{
        content: '';
        display: none;
    }
    }
    &::after{
        content: '';
        display: flex;
        margin-top: 50px;
        border: 1px dashed #000000;
        text-align: center;
        transform: rotate(90deg);
        height: 1000px;
        z-index: 22;
        @media(max-width:425px){
            display: none;
        }
    }
`
export const PunktDes = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    max-width: 700px;
    @media(max-width:425px){
        font-size: 18px;
    }

`
export const CHtototTam = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* max-height: 2500px;
    min-height:1500px; */
`
export const ChtoDelat = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #8d8989;

    max-width: 700px;

`
export const DowBlock = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin:70px;
    @media(max-width:425px){
        width: auto;
    }

`
export const DowDiv = styled.div`
    border:1px solid #0000007a;
    padding: 20px;
`
export const Docs = styled.div`
    background-color: #fff;
    padding: 40px 20px;
    margin: 20px auto;
    max-width: 1478px;
   
`
export const Descs = styled.div`
     display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const DocsDes = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    max-width: 350px;
    color: #000000;
    display: flex;
    /* align-items: center; */


    /* &::before{
        content: '';
        display: flex;
        width: 53px;
        background-color: #F0803D;
        height: 2px;


    } */
`
export const TitleDoc = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 28px;
    margin: 20px 0;
    color: #000000;
`
export const PP = styled.div`
    min-height: 300px ;

    @media(max-width:500px){
    min-height: 0 ;

    }
`