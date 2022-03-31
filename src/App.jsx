import Button from './elements/Button'
import styled from 'styled-components'
import MainContainer from './elements/MainContainer'
import AddQuestionForm from './components/AddQuestionForm'
import QuestionsList from './components/QuestionsList'

const App = () => {
    return (
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

            <AddQuestionForm/>
            
            <QuestionsList/>

            
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