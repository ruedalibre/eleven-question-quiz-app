import React from "react";
import MainContainer from "../elements/MainContainer";
import FinalScoreBar from '../elements/FinalScoreBar'
import ResultsList from '../elements/ResultsList'
import Button from './../elements/Button'
import { BrowserRouter } from "react-router-dom";

import React from 'react'

const ScoreScreen = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        
        <FinalScoreBar />

        <ResultsList/>
        
        <ButtonContainer>
          <Button>Play Again!</Button>
        </ButtonContainer>
        
      </MainContainer>
    </BrowserRouter>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export default ScoreScreen