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
                <p>You will be presented with <br /> 
                Eleven True or False Questions</p>
                <p>Can You score 100%?</p>
            </div>
            <div className='button-container'>
                <button onClick={beginQuiz}>BEGIN</button>
            </div>
        </div>
    )
}

export default App