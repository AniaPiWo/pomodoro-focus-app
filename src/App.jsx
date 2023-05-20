import React, { useState, useEffect } from 'react';
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Button } from "./components/Button";
import { Rings } from "./components/Icons/Rings";

function App() {
  const [time, setTime] = useState(1500); 
  const breakTime = 300; 

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const decreaseTimer = () => {
    if (time - 300 >= breakTime) {
      setTime(time - 300);
      console.log("decrease");
    } else if (time > breakTime) {
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
  

  return (
    <Container>
      <Header />
      <Timer currentTime={formatTime(time)} setTime={setTime} decreaseTimer={decreaseTimer} increaseTimer={increaseTimer}/>
      <Button onClick={handleClick} text="START FOCUS" />
      <Button onClick={handleClick} text="TAKE A BREAK" />
      -
      <Button onClick={handleClick} text="Show logs" />
      <Rings />
    </Container>
  );
}

export default App;

