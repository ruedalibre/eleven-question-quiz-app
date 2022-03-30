import React from "react"
import CategoryTitle from '../elements/CategoryTitle'
import QuestionCards from '../elements/QuestionCards'
import { TrueButton, FalseButton } from "../elements/Button"
import './QuizScren.css'

const QuizScreen = () => {
  return (
    <div className="quiz-container">
      <div className="quiz-categories-title">
        <CategoryTitle category='Entertainment' color='green'/>
        <SubcategoryTitle subcategory='Video Games' color='blue'/>
      </div>
      <div className="cards-container">
        <QuestionCards/>
      </div>
      <div className="answer-button-container">
        <TrueButton/>
        <FalseButton/>
      </div>
    </div>
  )
}

export default QuizScreen
