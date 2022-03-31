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

        <ResultsContainer>
          <ResultsList/>
        </ResultsContainer>
        
        <ButtonContainer>
          <Button>Play Again!</Button>
        </ButtonContainer>
        
      </MainContainer>
    </BrowserRouter>
  )
}

const FinalScoreBar = styled.div`
  display: flex;
  flex-direction: column;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export default ScoreScreen