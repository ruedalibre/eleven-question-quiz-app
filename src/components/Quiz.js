import React from "react"
import Button from '../elements/Button'
import MainContainer from "../elements/MainContainer"
import CategoryTitleBar from "../elements/CategoryTitleBar"
import styled from 'styled-components'
// import QuestionCard from "../elements/QuestionCards"

const Quiz = () => {
    return (
        <MainContainer>
          
          <CategoryTitleBar />


          <AnswerButtonContainer>
            <Button>T</Button>
            <Button>F</Button>
          </AnswerButtonContainer>

        </MainContainer>  
    )
}

const AnswerButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Quiz;
