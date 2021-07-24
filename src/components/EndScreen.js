import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'
import { Questions } from '../Helpers/QuestionBank'

function EndScreen() {

    React.useEffect(() => {
        localStorage.removeItem("count", count)
      })

    const { score, setScore, setGameState, count, setCount } = useContext(QuizContext);
    
    const restartQuiz = () => {
        setScore(0)
        setGameState("menu");
        setCount(0)
        console.log(setScore)
        
    }

    return (
        <div className="quizOver">
            <h1>Quiz Finished</h1>
            <h2>Your Score :</h2>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;
