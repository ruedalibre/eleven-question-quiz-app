import React from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'

const Question = (response_code, category, question) => {
  return (
    <QuestionContainer>
        <QuestionStyle>Question</QuestionStyle>
        {/* <p>{response_code}</p>
        <p>{question}</p>
        <p>{category}</p> */}
    </QuestionContainer>
  )
}

const QuestionContainer = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: white;
    height: 400px;
    padding: 10px 0;
    border-radius: 20px;
    border: 2px solid black; 
    margin: 20px 0;
`

const QuestionStyle = styled.h3`
  color: black;
`

export default Question