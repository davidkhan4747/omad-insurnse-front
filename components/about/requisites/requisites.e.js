import styled from 'styled-components'

export const RequisitesTable = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0 ;
    border-top: 1px solid #000;
    width: 918px;
    @media(max-width:768px){
        width: 400px;
        flex-direction: column;
    }
`


export const  RequisitesTableText = styled.p`
    max-width: 652px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

`