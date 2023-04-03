import styled from 'styled-components'


export const PersonalAreaBodyBg = styled.div`
    background-color: #f1f1f1;
    padding: 67px 50px;
        @media(max-width:425px){
            padding: 5px 50px;
        }

`
export const PersonalAreaBodyHeading = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #000000;
        @media(max-width:1024px){
            font-size: 24px;    
            line-height: 28px;
        }
            @media(max-width:425px){
                display: none;
            }

`
export const  PersonalAreaBodyCard = styled.div`
    background-color: #fff;
    padding:40px 50px;
    width: 418px;
    margin:40px 16px  ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width:1024px){
        margin: 11px 11px;
        padding: 34px 28px;
        width: 270px;

    }
`
export const PersonalAreaBodyCardBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 90px    ;
    @media(max-width:1600px){
        margin: 0;
    }
`
export const PersonalAreaBodyCardHeading = styled.h3`
    margin:0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

    @media(max-width:1024px){
        font-size: 18px;
        line-height: 21px;
    }
        

`
export const PersonalAreaBodyCardText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
    
        @media(max-width:1024px){
            font-size: 14px;
            line-height: 16px;
        }

`
export const  ButtonCard = styled.div`
    text-align: right;
    margin:0;
    padding:0;
`
