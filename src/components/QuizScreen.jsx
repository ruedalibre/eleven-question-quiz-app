import React from "react"
import CategoryTitle from '../elements/CategoryTitle'
import QuestionCards from '../elements/QuestionCards'
import AnswerButtons from '../elements/AnswerButtons'
import { TrueButton, FalseButton } from "../elements/Button"

import React from 'react'

const QuizScreen = () => {
  return (
    <>
        <CategoryTitle category='Entertainment' />
        <SubcategoryTitle subcategory='Video Games'/>
        <QuestionCards/>
        <AnswerButtons/>
        <TrueButton/>
        <FalseButton/>
    </>
  )
}

export default QuizScreen
