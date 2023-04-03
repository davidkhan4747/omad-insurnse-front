import styled from "styled-components";



export const NotFoundBg = styled.div`
    
    background: #0D4656;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;

`
export const NotFoundBlock = styled.div`
    position: relative;
    text-align: center;
    top: 220px;
`
export const NotFound = styled.h1`
    font-style: normal;
    font-weight: normal;
    font-size: 288px;
    margin: 0 ;

    line-height: 337px;
    color: #F0803D;
    @media(max-width:425px){
        font-size: 200px;
    }
    @media(max-width:320px){
        font-size: 180px;
    }

`
export const NotFoundText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 84px;
    margin: 10px 0;
    color: #FFFFFF;
    @media(max-width:425px){
        font-size: 40px;
        margin: 2px 0;
    }
    @media(max-width:320px){
        font-size: 30px;
        margin: 2px 0;
    }


`
export const NotFoundInfo = styled.p`
    font-weight: normal;
    margin: 0;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
    @media(max-width:320px){
        font-size: 18px;
    }
`
export const NoTbtn = styled.div`
    margin: 20px 0 ;
    padding: 0;
`