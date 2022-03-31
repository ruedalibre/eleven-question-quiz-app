import React from "react"
import Button from './../elements/Button'
import MainContainer from "../elements/MainContainer"
import { BrowserRouter, Route, Routes, NavLink, useParams } from "react-router-dom"
import CategoryTitleBar from "../elements/CategoryTitleBar"
// import Counter from './../elements/Counter'
import styled from 'styled-components'
import QuestionCard from "../elements/QuestionCards"
import AddQuestionForm from "./AddQuestionForm"
import db from "../firebase/firebaseConfig"

const QuizScreen = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        
        <CategoryTitleBar />
        
        <Routes>
          <Route path="/" element={<AddQuestionForm/>}/>
        </Routes>
        
        {/* <Counter/> */}

        <AnswerButtonContainer>
          <Button>T</Button>
          <Button>F</Button>
        </AnswerButtonContainer>

      </MainContainer>
    </BrowserRouter>
    
  )
}

const AnswerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default QuizScreen
