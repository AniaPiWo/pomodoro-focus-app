import React, { useState, useEffect } from 'react';
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Button } from "./components/Button";
import { Rings } from "./components/Icons/Rings";
import { StyledBox } from './components/styles/Box.styled';

function App() {
  const [time, setTime] = useState(50); 
  const [isActive, setActive] = useState(false)
  const [isPaused, setPaused] = useState(false)
  const minTime = 300; 

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const decreaseTimer = () => {
    if (time - 300 >= minTime) {
      setTime(time - 300);
      console.log("decrease");
    } else if (time > minTime) {
      setTime(breakTime);
      console.log("minimum reached");
    }
  };

  const increaseTimer = () => {
    if (time + 300 <= 3600) { 
      setTime(time + 300);
      console.log("increase");
    }
  };
const countdownTimer = () => {
  setActive(true);
  let intervalId = null;
  
  if (!isPaused) {
    intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          setActive(false);
          clearInterval(intervalId);
          return prevTime;
        }
      });
    }, 1000);
  }
};

  
  const countdownPause = () => {
    setPaused(true)
  }
  
  const countdownResume = () => {
    setPaused(false)
  }

  return (
<Container>
  <Header />
  <Timer currentTime={formatTime(time)} setTime={setTime} decreaseTimer={decreaseTimer} increaseTimer={increaseTimer} />
  {isActive ? (
    <StyledBox>
      {isPaused ? <Button onClick={countdownResume} text="RESUME" /> : <Button onClick={countdownPause} text="PAUSE" />}
      <Button onClick={handleClick} text="CANCEL" />
    </StyledBox>
  ) : (
    <StyledBox>
      <Button onClick={countdownTimer} text="START FOCUS" />
      <Button onClick={handleClick} text="TAKE A BREAK" />
      <Button onClick={handleClick} text="Show logs" />
    </StyledBox>
  )}
  <Rings />
</Container>


  );
}

export default App;

