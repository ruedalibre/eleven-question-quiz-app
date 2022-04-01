import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from './elements/Button'
import MainContainer from './elements/MainContainer'

const App = () => {
    const navigate = useNavigate();

    const eventHandler = () => {
        navigate('/quiz')
    }

    return (
            <MainContainer>

                <TitleContainer>
                    Welcome to the TRIVIA CHALLENGE!
                </TitleContainer>

                <TextContainer>
                    You will be presented with <br /> 
                    Eleven True or False Questions <br /><br />
                    Can You score 100%?
                </TextContainer>

                <ButtonContainer>
                    <Button onClick={() => navigate('/quiz')}>BEGIN</Button>
                </ButtonContainer>
                
            </MainContainer> 
    )
}

const TitleContainer = styled.h1`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
`;

const TextContainer = styled.h3`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default App