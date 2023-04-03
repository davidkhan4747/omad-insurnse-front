import styled from "styled-components";


export const UptadeSelect = styled.select`
    background: #F1F1F1;
    padding: 16px 20px;
    width: 365px;
    border-radius: 3px;
    border: 1px solid #b9b9b9;
    margin: 20px 0;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
        
        &:last-child{
            margin-left: 50px;
        }
    @media(max-width:425px){
        width:285px; 
            &:last-child{
                margin-left: 0;
            } 
    }
`
export const UptadeSelectRayon = styled.select`
   background: #F1F1F1;
    padding: 18px 18px;
    width: 365px;
    border: 1px solid #b9b9b9;
    margin: 20px 0;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-left: 50px;
    border-radius: 5px;;
     @media(max-width:770px){
         margin-left: 0;
     }
    @media(max-width:425px){
        width:285px; 
        margin-left: 0;
    }
`