import React from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'

const Question = (response_code, category, question) => {
  return (
    <QuestionContainer>
        <p>{response_code}</p>
        <p>{question}</p>
        <p>{category}</p>
    </QuestionContainer>
  )
}

const QuestionContainer = styled.p`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`

export default Question