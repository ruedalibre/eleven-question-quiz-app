import React from "react"
import CategoryTitle from '../elements/CategoryTitle'
import QuestionCards from '../elements/QuestionCards'
import { TrueButton, FalseButton } from "../elements/Button"

import React from 'react'

const QuizScreen = () => {
  return (
    <>
        <CategoryTitle category='Entertainment' color='green'/>
        <SubcategoryTitle subcategory='Video Games' color='blue'/>
        <QuestionCards/>
        <TrueButton/>
        <FalseButton/>
    </>
  )
}

export default QuizScreen
