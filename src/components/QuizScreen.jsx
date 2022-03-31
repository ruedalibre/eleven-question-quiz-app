import React from "react"
import Button from './../elements/Button'
import MainContainer from "../elements/MainContainer"
import { BrowserRouter, Route, Routes, Navlink } from "react-router-dom"
import CategoryTitleBar from "../elements/CategoryTitleBar"
import Counter from './../elements/Counter'
import QuestionCard from "../elements/QuestionCards"

const QuizScreen = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        
        <CategoryTitleBar />
        
        <Routes>
          <Route path="/data[1]/:id" element={<QuestionCard/>}/>
        </Routes>
        
        <Counter/>

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
