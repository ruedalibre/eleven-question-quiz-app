import React from "react"
import Button from './../elements/Button'
import './QuizScren.css'
import MainContainer from "../elements/MainContainer"
import useGetQuestion from "./hooks/useGetQuestion"

const QuizScreen = () => {
  const [questions, loading] = useGetQuestion();

  return (
    <MainContainer>
      <CategoriesContainer>
        <div category='Entertainment' color='green'/>
        <div subcategory='Video Games' color='blue'/>
      </CategoriesContainer>
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
