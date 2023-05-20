import styled from 'styled-components'

export const StyledTimer = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FEF2E7;
    margin-top: 170px;
    margin-bottom: 170px;
    gap: 30px;
    z-index: 1;
`

export const StyledTimerBtnBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 17px;
`


export const StyledTimerBtn = styled.button`
    width: 55px;
    height: 55px;
    font-size: 30px;
    background: #000300;
    border: 0.5px solid #FEF2E7;
    border-radius: 80px;
`