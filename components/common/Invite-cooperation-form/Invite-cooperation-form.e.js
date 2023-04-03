import { TextField } from '@mui/material'
import styled from 'styled-components'

export const InviteFormBody = styled.div`
    width:1295px;
    padding: 40px 50px; 
    padding-bottom: 0;
    background-color: #fff;
    margin:50px auto ;

    @media(max-width:425px){
        width: 300px;
        height: 1100px;
    }
`
export const FormTitle = styled.div`
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */
    @media(max-width:425px){
        font-size: 20px;
    }

    color: #000000;
`
export const UserName = styled(TextField)`
    background-color:  #F1F1F1;
    width: 365px;
    margin:10px 0 !important;

    @media(max-width:425px){
        width: 300px;

    }

`
export const UserPhone = styled(TextField)`
    background-color:  #F1F1F1;
    width: 365px;
    margin:10px 0 !important;
    &input {
        height: 80px;
    }
    @media(max-width:425px){
        width: 300px;

    }
`
export const UserEmail = styled(TextField)`
    background-color:  #F1F1F1;
    width: 365px;
    margin:10px 0 !important;
    &input {
        height: 80px;
    }

    @media(max-width:425px){
        width: 300px;
        &.chack {
            width: 285px;
        }
    }
`
export const FormsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1195px ;
    flex-wrap: wrap;
    margin:20px 0;
`
export const  OraganName  = styled(TextField)`
    width: 780px;
    background: #F1F1F1;
    margin:10px 0  !important;
    &input {
        height: 80px;
    }
`
export const UserCity = styled(TextField)`
    width: 365px;
    background: #F1F1F1;
    margin:10px 0 !important;

`
export const MessageIn = styled.textarea`
    width: 1195px;
    border: 1px solid #c5bfbf;
    height: 250px;

    padding: 20px 10px;
    background: #F1F1F1;
    border-radius: 4px;
    @media(max-width:425px){
        width: 200px;
        height: 150px;

    }
`
export const CheckBlock   = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    align-items: center;
    @media(max-width:425px){
        width: 200px;
        height: 150px;
        margin-top: 10px;
        flex-direction: column;
    }
   
`
export const FormButton = styled.button`
    background: #F0803D;
    padding: 14px 40px;
    border: none;
    color:#fff;
    cursor: pointer;
    font-size: 18px;
`
export const  FormSog = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    width: 850px;
    @media(max-width:425px){
        width: 200px;
        padding: 0 14px;
        font-size: 14px !important;

    }
`