import styled from "styled-components";

export const AggentsTable = styled.table`
   width: 1478px;
    height: 391px;
    border-collapse: collapse;
    margin-bottom: 220px;
    @media(max-width:750px){
        display:none;
    }

`
export const AgentsTd = styled.td`
    border: 1px solid #000;
    margin: 0;
    padding: 0 0  0 50px  ;
    @media(max-width:750px){
        padding:  0 20px;
    }
    &.oneT {
        width: 726px;
        height: 152px;

    }
    &.twoT{
        width: 376px;

    }
    &.threeT{
        width: 376px;
        
    }
    @media(max-width:425px){
        .none {
            display: none;
        }
    }
`
export const AgentsTR = styled.tr`
    height: 150px;
    padding: 0;
    margin: 0;
`
export const TableDes  = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    text-align: center;
    &.title {
        max-width: 218px;
        margin:0 auto;
    }
    @media(max-width:750px){
        max-width: 0;
        font-size: 20px;
    }
`
export const TitleTable = styled.p`
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

`
export const DesTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;

    opacity: 0.5;
`
//  secont table

export const SecontTable  = styled.table`
    height: 45px;
     width: 1487px;
     border-collapse: collapse;
     margin:0 auto;
    margin-bottom: 220px;
    @media(max-width:425px){
        display:none;
        
    }


`
export const ResponseTable = styled.table`
    width: 343px;
     border-collapse: collapse;
     margin:0 auto;
    margin-bottom: 20px;
    display: none;
    @media(max-width:750px){
        display: block;
    }
`
export const NumTable = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    /* identical to box height */


    color: #000000;

`
export const TdTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;

    &.Nocenter {
        text-align: left;
    }
    @media(max-width:425px){
        font-size: 20px;
    }

`
export const СenterМ = styled.span`
    text-align: center;
`