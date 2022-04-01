import React from "react"
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import MainContainer from "../elements/MainContainer"
import CategoryTitleBar from "../elements/CategoryTitleBar"
import Question from "./Question"
import Button from '../elements/Button'

const QuizScreen = (props) => {
    const navigate = useNavigate();

    return (
        <MainContainer>
          
          <CategoryTitleBar />

          <Question />

          <ButtonContainer>
            <Button>T</Button>
            <Button>F</Button>
          </ButtonContainer>

        </MainContainer>  
    )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  width: 100%
`

export default QuizScreen;
