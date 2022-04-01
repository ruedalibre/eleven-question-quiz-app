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

                <IconContainer>
                    <p>ICONO</p>

                </IconContainer>

                <TextContainer>
                    You will be presented with <br /> 
                    Eleven True or False Questions <br /><br />
                    Can You score 100% ?
                </TextContainer>

                <ButtonContainer>
                    <Button onClick={() => navigate("/quiz-screen")}>BEGIN</Button>
                </ButtonContainer>
            
        </MainContainer> 
    )
}

const TitleContainer = styled.h1`
    display: inline-block;
    text-align: center;
    color: black;
`;

const IconContainer = styled.div`
    height: 50%;
    border: 1px solid black;
    border-radius: 15px;
`

const TextContainer = styled.h3`
    display: inline-block;
    text-align: center;
    color: black;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default IntroScreen