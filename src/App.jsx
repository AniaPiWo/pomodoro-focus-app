import React, { useState, useEffect } from 'react';
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Button } from "./components/Button";
import { Rings } from "./components/Icons/Rings";
import { StyledBox } from './components/styles/Box.styled';

function App() {
  const [time, setTime] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleCancel = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(25 * 60); 
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const decreaseTimer = () => {
    setTime(prevTime => prevTime - 5 * 60);
  };

  const increaseTimer = () => {
    setTime(prevTime => prevTime + 5 * 60);
  };

  const testFunction = () =>{
    console.log("clicked");
  }

  return (
  <Container>
    <Header/>
  <StyledBox>
    <Timer currentTime={formatTime(time)} setTime={setTime} isActive={isActive} isPaused={isPaused} decreaseTimer={decreaseTimer} increaseTimer={increaseTimer} />
  </StyledBox>
  {!isActive&&!isPaused ? (
  <StyledBox>
      <StyledBox>
        <Button onClick={handleStart} text="START FOCUS" />
        <Button onClick={testFunction} text="TAKE A BREAK" />
        <Button onClick={testFunction} text="Show logs" />
      </StyledBox>
  </StyledBox>
  ) : ( 
  <StyledBox>
    {!isPaused ? 
     <Button onClick={handlePause} text="PAUSE" /> 
     :
     <Button onClick={handleResume} text="RESUME" />}
    <Button onClick={handleCancel} text="CANCEL" />
  </StyledBox>
  )}
  <Rings />
</Container>
)}

export default App;

