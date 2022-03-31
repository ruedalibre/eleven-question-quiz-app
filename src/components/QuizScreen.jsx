import React from "react"
import Button from './../elements/Button'
import './QuizScren.css'
import MainContainer from "../elements/MainContainer"
import useGetQuestion from "./hooks/useGetQuestion"
import { BrowserRouter, Navlink } from "react-router-dom"
import CategoryTitleBar from "../elements/CategoryTitleBar"

const QuizScreen = () => {
  const [questions, loading] = useGetQuestion();

  return (
    <BrowserRouter>
      <MainContainer>
        <CategoryTitleBar />
        <CardsContainer>
          {loading === true ?
                <p>Loading...</p>  
              :
              <Card>
                {questions.map((question) => {
                  return <Question key={question.id}>{question.question}</Question>
                })}
              </Card>
                
              }  
        </CardsContainer>
        <AnswerButtonContainer>
          <Button>True</Button>
          <Button>False</Button>
        </AnswerButtonContainer>
      </MainContainer>
    </BrowserRouter>
    
  )
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

`
const AnswerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

`
export default QuizScreen
