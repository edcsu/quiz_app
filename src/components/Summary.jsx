import { useState} from 'react'

import quizCompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'

function Summary({ userAnswers }) {
    const skipped = userAnswers.filter(answer => answer === null) 
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    
    const skippedShare = Math.round((skipped.length / userAnswers.length) * 100)
    const correctShare = Math.round((correct.length / userAnswers.length) * 100)
    const wrongShare = 100 - (skippedShare + correctShare)

    return (
        <div id="summary">
            <img src={quizCompleteImage} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctShare}%</span>
                    <span className='text'>Correct</span>
                </p>
                <p>
                    <span className='number'>{wrongShare}%</span>
                    <span className='text'>Wrong</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let answerCssClass = 'user-answer'

                    if (answer === null) {
                        answerCssClass += ' skipped' 
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        answerCssClass += ' correct'
                    } else {
                        answerCssClass += ' wrong'
                    }
                    
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={answerCssClass}>{answer ?? "Skipped"}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Summary