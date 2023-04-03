import { TextField } from "@mui/material";
import styled from "styled-components";


export const BodyForm = styled.div`
    background-color: #f1f1f1;
    min-height: 100vh;

`
export const FormBody = styled.div`
    width: 880px;
    padding:80px 50px;
    margin: 0 auto;
    background-color: #fff;
    @media(max-width:770px){
        max-width: 680px;
    }
    @media(max-width:425px){
        width: 305px;
        padding: 0;
    }
`
export const PageForm = styled.form`
    padding-bottom: 40px;
    border-bottom:  1px solid #000000;
    /* .myInput{
        background: #F1F1F1;
    padding: 30px 20px;
    width: 365px;
    border: none;
    margin:20px 0 ;
    margin-left: 50px;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media(max-width:425px){
        width:285px;  
        margin-left: 0px;

    }
    } */
`
export const FormHeading = styled.h2`
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */


    color: #000000;
    @media(max-width:425px){
        font-size: 16px;
        line-height: 19px;  
    }
`
export const UserInfoInput = styled(TextField)`
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 780px;
    border: none;

    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;
    @media(max-width:770px){
        max-width: 580px;
    }
    @media(max-width:425px){
        width:284px !important;  
    }
`
export const Seriya = styled.input`
    background: #F1F1F1;
    padding: 17px 20px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    width: 780px;

    outline: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;
    @media(max-width:770px){
     max-width: 580px;

    }
    @media(max-width:425px){
        width:285px;  
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
        width:285px;  
    }
       
`
export const UserEmail = styled(TextField)`
    .myInput{

    }
    background: #F1F1F1;
    /* padding: 30px 20px; */
    width: 365px;
    border: none;
    margin-top:20px  !important  ;
    margin-bottom: 20px !important;
    margin-left: 50px !important;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    @media(max-width:770px){
        margin: 0 !important;
    }
    @media(max-width:425px){
        width:285px;  
        margin-left: 0px !important;

    }
       
`
export const ButtonAdd = styled.div`
    padding:16px;
    text-align: center;
    width: 181px;
    color: #0D4656;
    background: transparent;
    border: 1px solid #0D4656;
    margin:20px 0 ;
    transition: 0.5s all linear;
    cursor: pointer;
    &:hover{
        border-color: #f0803d;
        color:#f0803d ;
        
    }

`
export const FormMessage = styled.textarea`
    background: #F1F1F1;
    width: 780px;
    height: 250px;
    border: none;
    padding: 20px 10px;
    color: #000;
    @media(max-width:425px){
        width:285px;  
    }

`
export const ButtonBlock = styled.div`
    display: flex;
    margin:20px 0;
`