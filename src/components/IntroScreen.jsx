import React from 'react'
import styled from 'styled-components'
import MainContainer from '../elements/MainContainer'
import Button from '../elements/Button'
import { useNavigate } from 'react-router-dom'

const IntroScreen = (props) => {
    const navigate = useNavigate();

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
                    <Button onClick={() => navigate("/quiz-screen")}>BEGIN</Button>
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

export default IntroScreen