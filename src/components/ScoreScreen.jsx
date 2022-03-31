import React from "react";
import FinalScore from '../elements/FinalScore'
import AnswerList from '../elements/AnswerList'
import Button from './../elements/Button'
import MainContainer from "../elements/MainContainer";
import { BrowserRouter } from "react-router-dom";

import React from 'react'

const ScoreScreen = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <FinalScore />
        <AnswerList />
        <ButtonContainer>
          <Button>Play Again!</Button>
        </ButtonContainer>
        
      </MainContainer>
    </BrowserRouter>
  )
}

const FinalScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export default ScoreScreen