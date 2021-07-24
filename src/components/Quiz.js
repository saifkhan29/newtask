import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

export default function Quiz() {
  const { score, setScore, setGameState, count, setCount } =
    useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  React.useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  React.useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0);
    setCount(parsedCount);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    console.log(optionChosen)
    setCurrQuestion(currQuestion + 1);
  };

  const previousQuestion = () => {
    if (currQuestion >= 1) {
      setCurrQuestion(currQuestion - 1);
    }
  };

  const submit = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  



  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          className="button1"
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          {" "}
          {Questions[currQuestion].optionA}{" "}
        </button>
        <button
          className="button1"
          onClick={() => {
            setOptionChosen("B");
          }}
        >
          {" "}
          {Questions[currQuestion].optionB}{" "}
        </button>
        <button
          className="button1"
          onClick={() => {
            setOptionChosen("C");
          }}
        >
          {" "}
          {Questions[currQuestion].optionC}{" "}
        </button>
        <button
          className="button1"
          onClick={() => {
            setOptionChosen("D");
          }}
        >
          {" "}
          {Questions[currQuestion].optionD}{" "}
        </button>
      </div>

      <div className="btn2holder">
        <button onClick={previousQuestion} className="button2">
          Previous Question
        </button>

        {currQuestion === Questions.length - 1 ? (
          <button onClick={submit} className="button2">
            Submit
          </button>
        ) : (
          <button onClick={nextQuestion} className="button2">
            {" "}
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
