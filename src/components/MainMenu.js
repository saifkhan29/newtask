import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Context";

import "../App.css";

export default function MainMenu() {
  const { gameState, setGameState, count, setCount } = useContext(QuizContext);

  const changeComponent = () => {
    setGameState("quiz");
  };

  
//   React.useEffect(() => {
//     setTimeout(() => setCount(count + 1), 1000);
//   }, [count]);

  return (
    <div className="menu">
      <button onClick={changeComponent}>Start Quiz</button>
    </div>
  );
}
