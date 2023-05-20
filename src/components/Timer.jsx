import React from "react";
import { StyledTimer, StyledTimerBtnBox, StyledTimerBtn } from "./styles/Timer.styled";

export const Timer = ({currentTime, setTime, time, decreaseTimer, increaseTimer}) => {


    return (
        <>
        <StyledTimer>
            <p>{currentTime}</p>
            <StyledTimerBtnBox>
                <StyledTimerBtn onClick={decreaseTimer}>-</StyledTimerBtn>
                <StyledTimerBtn onClick={increaseTimer}>+</StyledTimerBtn>
            </StyledTimerBtnBox>
        </StyledTimer>
        </>
    )
}
