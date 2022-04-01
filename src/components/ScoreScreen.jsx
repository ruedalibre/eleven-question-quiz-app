import React from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import MainContainer from "../elements/MainContainer";
import FinalScoreBar from '../elements/FinalScoreBar'
import ResultsList from '../elements/ResultsList'
import Button from '../elements/Button'

const ScoreScreen = (props) => {
    const navigate = useNavigate();

    return (
        <MainContainer>
          
          <FinalScoreBar />

          <ResultsList />
          
          <ButtonContainer>
            <Button onClick={() => navigate("/")}>Play Again!</Button>
          </ButtonContainer>
          
        </MainContainer>
    )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export default ScoreScreen;