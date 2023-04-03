import styled from "styled-components";


export const HeaderNavBody = styled.div`
    background-color: #0D4656;
    padding: 40px 50px ;
    box-sizing: border-box;

`
export const PersonalAreaNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1820px;
    margin: 0 auto;
    box-sizing: border-box;

    @media(max-width:1024px){
    max-width: 960px;
        
    }


`
export const PersonalAreaUserNav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin:0;
    color: #000000;
    box-sizing: border-box;
        @media(max-width:825px){
            display: none;
        }

`

export const PersonalAreaUserNavLi = styled.li`
    padding: 30px 0;
    margin-right:50px;
    box-sizing: border-box;
    font-size: 18px;
    border-bottom:  2px  solid #fff;
    &:active{
        border-bottom:  2px solid #F0803D;
    }
        &:hover{
            border-bottom:  2px solid #F0803D;
        }

        @media(max-width:1024px){
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;

            color: #000000;
        }
`
export const PersonalAreaSettings = styled.li`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    list-style: none;
    /* identical to box height */


    color: #000000;

    @media(max-width:1024px){
        font-size: 14px;
        line-height: 16px;
    }
    @media(max-width:825px){
        display: none;
    }

`

export const NavBurger = styled.div`
    display: none;
    @media(max-width:825px){
        display: block;
    }
`