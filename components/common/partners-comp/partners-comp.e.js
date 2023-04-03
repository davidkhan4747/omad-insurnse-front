import { TextField } from '@mui/material'
import styled from 'styled-components'

export const ComponentBody = styled.div`
    @media(max-width:425px){
    width: 302px;
    margin:0 auto;

    }
`
export const  ComponentHigh = styled.div`
    background: #0D4656;
    margin: 0;
    width: 480px;
    padding: 40px 50px ;
    @media(max-width:425px){
    width: 300px;

    }
`
export const CompHightTitle = styled.h2`
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
    @media(max-width:425px){
        font-size:20px
    }
`
export const CompHighInput = styled(TextField)`
    background: #FFFFFF;
    width: 358px;
    @media(max-width:425px){
        width: 190px;

    }
`
export const ComponentLow = styled.div`
    background-color: #fff;
    width: 480px;
    text-align: center;
    padding: 40px 50px;
    @media(max-width:425px){
    width: 300px;

    }
`
export const ComponentLowTitile = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
    @media(max-width:425px){
        font-size:20px
    }
`
export const LowDes = styled.p`
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;

color: #000000;

`
export const HowFace = styled.div`
    display: flex;
    max-width: 380px;
    margin-bottom: 51px;
    @media(max-width:425px){
    width: 300px;
    flex-direction: column;
    }
`
export const FaceYur = styled.div`
    margin: 0;
    padding: 10px 41px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    background-color: #fff;
    max-width: 180px;
    color: #000;
    cursor:pointer;
    &.activeY {
        background-color: #F0803D;
        color: #FFFFFF;

    }

`
export const FaceFiz = styled.div`
    margin: 0;
    cursor:pointer;
    padding: 10px 41px;
    font-style: normal;
    font-weight: normal;
    max-width: 180px;

    font-size: 24px;
    line-height: 28px;
    background-color: #fff;
    color: #000;

    &.active {
        background-color: #F0803D;
        color: #FFFFFF;

    }

`
export const BTNblock = styled.div`
    text-align: right;
    margin:40px 0 ;
    /* z-index: 56; */
`