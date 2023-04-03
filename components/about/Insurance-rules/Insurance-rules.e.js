import { TextField } from "@mui/material";
import styled from "styled-components";

export const RulesSearch = styled(TextField)`
    background: #FFFFFF;
    width: 947px;
    color: #000 !important;
    &::after{
        content: '  ';
        }
    @media(max-width:425px){
        width: 350px;
    }
`
export const Slogan = styled.span`
    font-size: 24px;
    @media(max-width:425px){
        font-size: 16px;
    }
`
export const Pravila = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    /* oooo */

    color: #F0803D;
    @media(max-width:425px) {
        font-size:16px
    }
`
export const InfoDoc = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    padding: 0;
    color: #000000;
    @media(max-width:425px){
        font-size:16px
    }
`
export const InfoDocItem = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
     margin:0 ;
     padding:0;
    color: rgba(0, 0, 0, 0.5);
    @media(max-width:425px){
        font-size:14px
    }
`
export const BlockDocs = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 948px;
    padding: 31px  0 ;
    border-bottom: 1px solid #000;
`
export const Suk = styled.div`
    margin-top: 30px ;
    padding: 0;
    text-align: right;
`