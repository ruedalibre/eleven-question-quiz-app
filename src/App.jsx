import React, { useState} from 'react'
import { BeginButton } from './elements/Button'


const App = () => {
    
    const beginQuiz = () => {
        // funcion para pasar al componente de QuizScreen
    }
    
    return (
        <div className='main-container'>
            <div className='static-text'>
                <h1>Welcome to the Trivia Challenge!</h1>
                <h3>You will be presented with <br /> 
                Eleven True or False Questions</h3>
                <h3>Can You score 100%?</h3>
            </div>
            <div className='button-container'>
                <button className='begin-button'>BEGIN</button>
            </div>
        </div>
    )
}

export default App