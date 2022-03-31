import React from "react"
import Button from './../elements/Button'
import MainContainer from "../elements/MainContainer"
import { BrowserRouter, Route, Routes, Navlink } from "react-router-dom"
import CategoryTitleBar from "../elements/CategoryTitleBar"
import QuestionCard from "../elements/QuestionCards"

const QuizScreen = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        
        <CategoryTitleBar />
        
        <CardsContainer>
          <Routes>
            <Route path="/dataObjects/:id" element={<QuestionCard/>}/>
          </Routes>
          {loading === true ?
                <p>Loading...</p>  
              :
              <QuestionCard/>
              }  
        </CardsContainer>

        <AnswerButtonContainer>
          <p>1 / 11</p>
          <Button>T</Button>
          <Button>F</Button>
        </AnswerButtonContainer>

      </MainContainer>
    </BrowserRouter>
    
  )
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

`
const AnswerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Counter = styled.p`

`

export default QuizScreen
