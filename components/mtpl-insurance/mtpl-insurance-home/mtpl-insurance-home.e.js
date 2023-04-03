import styled from 'styled-components'

export const HomeBg = styled.div`
    background: #0D4656;
    padding-bottom: 47px;
    @media(max-width:525px){
            background-size: cover;
            background-position:center;
    }
`   
export const HomeImg = styled.div`
    width: 1000px;
    @media(max-width:425px){
        display: none;
    }
`
export const HomeBlock = styled.div`
    display:flex;
    padding: 100px 0px 0 60px;
    justify-content:space-between;
    @media(max-width:1440px){
        padding:100px 0 0 0 ;
        flex-direction: column;
    }
    @media(max-width:505px){
        flex-direction: column-reverse;
    }
`
export const HomeBgItem = styled.div`
    // padding:110px 60px;
    width: 739px;
    @media(max-width:1440px){
        padding: 15px 0 0 26px;
    }
    @media(max-width:425px){
        background: #0D4656;
        margin-top: 0px;
        padding:15px ;
        max-width: 355px;
    }
    @media(max-width:375px){
        
        max-width:375px;
    }
    @media(max-width:320px){
        
        max-width:320px;
    }
`
export const HomeHeading = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    padding-bottom:10px;
    margin-bottom:10px;
    color: #FFFFFF;
    border-bottom: 1px solid #fff;

    @media(max-width:425px){
        /* padding:100px 0 0 0 ; */
        font-size: 24px;
        line-height: 28px;
        width: 300px;
        text-transform: uppercase;
    }
    
    
`
export const HomeText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    padding:0;
    margin:0;
    color: #FFFFFF;

`


// 
export const CardService = styled.div`
    display:flex;   
    max-width:960px;
    justify-content: space-between;
    @media (max-width:425px){
        justify-content:space-between
    }

`
export const CardServiceBlock = styled.div`
    color:#fff;
    padding-top:40px;
@media (max-width:1060px){
    &:last-child{
        display:none
    }

}
`
export const CardServiceHeading = styled.h3`
    margin:0;
    padding:0;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    width: 200px;
    color: #fff;
    @media (max-width:425px){
       font-size:14px
    }
`
export const CardServiceText = styled.p`
    font-style: normal;
    font-weight: normal;    
    font-size: 18px;
    line-height: 21px;
    width: 206px;
    color: #fff;

    @media (max-width:425px){
        font-size:13px;
        width: 138px;
        padding: 0;
     }`