import { useState} from 'react'
import quizCompleteImage from '../assets/quiz-complete.png'
function Summary() {
  return (
    <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
    </div>
  )
}

export default Summary