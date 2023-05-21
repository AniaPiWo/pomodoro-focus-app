import React from "react";
import {
  StyledTimer,
  StyledTimerBtnBox,
  StyledTimerBtn
} from "./styles/Timer.styled";

export const Timer = ({ currentTime, decreaseTimer, increaseTimer, isActive, isPaused }) => {
  return (
    <>
      <StyledTimer>
        <p>{currentTime}</p>
        {isActive || isPaused ? null : (
          <StyledTimerBtnBox>
            <StyledTimerBtn onClick={decreaseTimer}>-</StyledTimerBtn>
            <StyledTimerBtn onClick={increaseTimer}>+</StyledTimerBtn>
          </StyledTimerBtnBox>
        )}
      </StyledTimer>
    </>
  );
};




