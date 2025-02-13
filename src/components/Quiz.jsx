import { useCallback, useState } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImage from '../assets/quiz-complete.png'
import Timer from './Timer'
import Answers from './Answers'

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


    return (
        <div id="quiz">
            <div id="question">
                <Timer key={activeQuestionIndex} timeout={30000} onTimeOut={handleSkipAnswer}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <Answers
                    key={activeQuestionIndex}
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    selectedAnswer={userAnswers[userAnswers.length -1]} 
                    answerState={answerState}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    );
}

export default Quiz