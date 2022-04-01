import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import ScoreScreen from './components/ScoreScreen'

const App = () => {
    return (
        <ContainerApp>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IntroScreen/>} />
                    <Route path="/quiz-screen" element={<QuizScreen/>} />
                    <Route path="/score-screen" element={<ScoreScreen/>} />                    
                </Routes>
            </BrowserRouter>
        </ContainerApp>
           
    )
}

const ContainerApp = styled.div`
    padding: 50px;
`

export default App