import styled from "styled-components";

export const CardsHead = styled.div`
    display: flex;
    justify-content: space-around;
    background-color:  #0D4656;;
    @media(max-width:768px){
        display: none;
    }
`
export const CardsHeadItem = styled.div`
    width: 40%;
    padding: 40px 50px 5px;
    display: flex;
    flex-direction: column-reverse  ;
    &:first-child{
        border-right: 1px solid #fff;
    }
`
export const CardsText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;
    @media(max-width:500px){
        font-size:16px;
    }
`
export const CardsTextMini = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
    @media(max-width:500px){
        font-size:14px;
    }
`
// cards
export const CardImg = styled.div`
    padding: 0px 0 0px;
    margin: 0;
    min-width: 431px;
    @media(max-width:425px){
    min-width: 400px;

    }
    @media(max-width:375px){
     min-width: 300px;

    }
`   
export const ContentsCard = styled.div`
    display: flex;
    width: 100%;
    @media(max-width:500px){
        flex-direction: column;
    }
`
export const CardContacts = styled.div`
        padding: 40px 40px;
        display: flex;
        align-items: center;
        &:nth-child(even){
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }
        @media(max-width:1024px){
            flex-direction: column;
        }
        @media(max-width:425px){
            background-color: #f1f1f1;
            padding: 40px 18px;;
}
`
export const CardContactsHeading = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    @media(max-width:505px){
        font-size: 14px;
    }
`
export const CardContactsText = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color:#a0a0a0;
    @media(max-width:425px){
        font-size: 13px;
    }   

`
export const CardsData = styled.div`
    width: 40%;
    padding: 0px 50px 5px;
    @media(max-width:425px){
        width: 52%;
        padding: 0px 0px 0px;
        
    }
`
export const MLoc = styled.span`
    font-size: 20px;
    padding: 0px 3px;
    color: #fff;
    width: 30px;
    border-radius: 50%;
    background-color: #0D4656;
    text-align: center;
    @media(max-width:425px){
        font-size: 13px;
    }   
`
export const CardAdress = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
/* identical to box height */
    color: #000000;
    @media(max-width:500px){
        font-size:14px;
    }
`