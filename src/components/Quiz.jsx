import { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImage from '../assets/quiz-complete.png'
import Timer from './Timer'

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('')
    
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

        setTimeout(() => {
           if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
           } else {
                setAnswerState('wrong')
           }
           setTimeout(() => {
                setAnswerState('')
           }, 2000);
        }, 1000);
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])

    if (quizIsComplete) {
        return (
        <div id="summary">
            <img src={quizCompleteImage} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
        </div>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
        <div id="question">
            <Timer key={activeQuestionIndex} timeout={30000} onTimeOut={handleSkipAnswer}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
            {shuffledAnswers.map((answer) => {
                const isSelected = userAnswers[userAnswers.length -1] === answer
                let buttonClass = ''

                if (answerState === 'answered' && isSelected) {
                    buttonClass = 'selected'
                }
                
                if ((answerState === 'correct' || answerState === 'correct')  && isSelected) {
                    buttonClass = answerState
                }

                return (
                    <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)} className={buttonClass}>
                        {answer}
                    </button>
                    </li>
                )
            })}
            </ul>
        </div>
        </div>
    );
}

export default Quiz