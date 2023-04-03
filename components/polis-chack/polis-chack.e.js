import { TextField } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div`
        background: #f1f1f1;
        backdrop-filter: blur(10px);
        min-height: 100vh;
        padding-top: 5%;
        @media(max-width:500px){
            padding:15% 0;
        }
`
export const ChackTitle = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    text-align: center;
    @media(max-width:425px){
        font-size: 24px;
        margin-top: 55px ;
    }
`
export const CheckBlock = styled.div`
    width: 882px;
    padding: 40px 50px;
    background-color: #fff;
    margin: 0 auto;
    @media(max-width:425px){
        width: 320px;
        padding: 0 17px;
    }
`
export const CheckForm = styled.form`
`
export const FormTitle = styled.h4`
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
    @media(max-width:425px){
        display: none;
    }

`
export const PolisNum = styled(TextField)`
    width: 780px;
    background-color: #F1F1F1;
    margin: 10px 0;
    @media(max-width:425px){
        width: 285px;
    }
`