import React from 'react'
import logoimg from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
        <img src={logoimg} alt="logo" />
        <h1>React Quiz</h1>
    </header>
  )
}

export default Header