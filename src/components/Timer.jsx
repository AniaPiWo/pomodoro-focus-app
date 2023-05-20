import React from "react";
import { StyledTimer, StyledTimerBtnBox, StyledTimerBtn } from "./styles/Timer.styled";

export const Timer = () => {

    return (
        <>
        <StyledTimer>
            <p>25:00</p>
            <StyledTimerBtnBox>
                <StyledTimerBtn>-</StyledTimerBtn>
                <StyledTimerBtn>+</StyledTimerBtn>
            </StyledTimerBtnBox>
        </StyledTimer>
        </>
    )
}