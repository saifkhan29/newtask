import React , { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Context';


function Timer() {
    const {gameState, setGameState, count, setCount} = useContext(QuizContext);

//   const [count, setCount] = useState(0);

  

  
  

  return (
    <div>
        <h1 className="timer">Timer : {count}</h1>
    </div>
  );
}

export default Timer;
