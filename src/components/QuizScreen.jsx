import React from "react"
import Button from './../elements/Button'
import './QuizScren.css'
import MainContainer from "../elements/MainContainer"

const QuizScreen = () => {
  return (
    <MainContainer>
      <CategoriesContainer>
        <div category='Entertainment' color='green'/>
        <div subcategory='Video Games' color='blue'/>
      </CategoriesContainer>
      <CardsContainer>
        <div>CARD</div>
      </CardsContainer>
      <AnswerButtonContainer>
        <Button>True</Button>
        <Button>False</Button>
      </AnswerButtonContainer>
    </MainContainer>
  )
}

const CategoriesContainer = styled.div`

`
const CardsContainer = styled.div`

`
const AnswerButtonContainer = styled.div`

`
export default QuizScreen
