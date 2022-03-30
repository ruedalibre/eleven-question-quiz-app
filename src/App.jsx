import React, { useState} from 'react'
import Button from './elements/Button'
import styled from 'styled-components'
import MainContainer from './elements/MainContainer'


const App = () => {
    
    const beginQuiz = () => {
        // funcion para pasar al componente de QuizScreen
    }
    
    return (
        <MainContainer>
            <TitleContainer>
                Welcome to the Trivia Challenge!
            </TitleContainer>
            
            <TextContainer>
                You will be presented with <br /> 
                Eleven True or False Questions <br /><br />
                Can You score 100%?
            </TextContainer>
            
            <ButtonContainer>
                <Button black>BEGIN</Button>
            </ButtonContainer>
        </MainContainer>
    )
}

const TitleContainer = styled.h1`
    margin: 50px 0;
`;

const TextContainer = styled.h3`
    margin: 50px 0;
`;

const ButtonContainer = styled.div`

`

export default App