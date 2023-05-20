import React from "react";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Button } from "./components/Button";
import { Rings } from "./components/Icons/Rings";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Container>
      <Header />
      <Timer />
      <Button onClick={handleClick} text="START FOCUS" />
      <Button onClick={handleClick} text="TAKE A BREAK" />
      -
      <Button onClick={handleClick} text="Show logs" />
      <Rings />
    </Container>
  );
}

export default App;

