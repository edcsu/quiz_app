import { useState } from 'react'
import Timer from './Timer'
import Answers from './Answers'

function Question({ answerState, questionText, answers, onSelectAnswer, onSkipAnswer, selectedAnswer }) {
  return (
    <div id="question">
        <Timer timeout={15000} onTimeOut={onSkipAnswer}/>
        <h2>{questionText}</h2>
        <Answers
            answers={answers}
            selectedAnswer={selectedAnswer} 
            answerState={answerState}
            onSelect={onSelectAnswer}
        />
    </div>
  )
}

export default Question