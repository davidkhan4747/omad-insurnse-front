import styled from 'styled-components'

export const MissionBody = styled.div`
    background-color: #E5E5E5;
    padding: 150px 20px ;
    /* height: 200vh; */

    @media(max-width:500px){
    padding: 25px 20px ;

    }
`   
export const MissionContent = styled.div`
     display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    @media(max-width:775px){
        flex-direction: column;
    justify-content: center;
    }
`
export const MissionNav = styled.div`
    width: 480px;
    background: #ffff;
    padding: 40px 50px;
    margin: 0 27px;
    border: 1px solid #000;
    max-height: 1024px;
    @media(max-width:425px){
        margin: 0;
       max-width: 386px;

    }
    @media(max-width:395px){
        margin: 0;
       max-width: 335px;

    }
    @media(max-width:320px){
        margin: 0;
       max-width: 250px;

    }
`
export  const MissionNavItem = styled.p`
    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
    color: #000000;
    transition: 0.3s all linear;
    &:hover{
        color: #F0803D;;
    }
    @media(max-width:425px){
       

    }
    @media(max-width:375px){
        font-size : 20px;

    }
    
`

export const MissionContentTitle = styled.h2`
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
    @media(max-width:375px){
        font-size : 30px;

    }

`
export const MissionContentAbout = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    max-width:948px;
    color: #000000;

`
export const MissionContentAbItem = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;    
    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        position: relative;
        height: 2px;
        background: #F0803D;
        bottom: 7px;
        right: 9px;
    }
`