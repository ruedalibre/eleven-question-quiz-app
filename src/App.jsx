import Button from './elements/Button'
import styled from 'styled-components'
import MainContainer from './elements/MainContainer'
import AddQuestionForm from './components/AddQuestionForm'
import { BrowserRouter, Route, Routes, NavLink, Params } from "react-router-dom"
import QuestionsList from './components/QuestionsList'

const App = () => {
    return (
        <BrowserRouter>
            <MainContainer>

            {/* <TitleContainer>
                Welcome to the TRIVIA CHALLENGE!
            </TitleContainer>

            <TextContainer>
                You will be presented with <br /> 
                Eleven True or False Questions <br /><br />
                Can You score 100%?
            </TextContainer>

            <ButtonContainer>
                <Button black>PLAY</Button>
            </ButtonContainer> */}

            <Routes>
                <Route path="/" element={<AddQuestionForm/>}/>
                <Route path="/" element={<QuestionsList/>}/>
            </Routes>

            </MainContainer> 
        
        </BrowserRouter> 
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