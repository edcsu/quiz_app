import { useState} from 'react'
import quizCompleteImage from '../assets/quiz-complete.png'
function Summary() {
  return (
    <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>10%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>Correct</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>Wrong</span>
            </p>
        </div>
        <ol>
            <li>
                <h3>2</h3>
                <p className='question'>question text</p>
                <p className='user-answer'>user's answer</p>
            </li>
        </ol>
    </div>
  )
}

export default Summary