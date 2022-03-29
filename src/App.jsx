import React from 'react'
import { BeginButton} from './elements/Button'

const App = () => {
    return (
    <>
        <div className='main-container'>
            <div className='static-text'>
                <h1>Welcome to the Trivia Challenge!</h1>
                <p>You will be presented with 11 True or False Questions</p>
                <p>Can You score 100%?</p>
            </div>
            <div>
                <BeginButton>BEGIN</BeginButton>
            </div>
        </div>
    </>
    )
}

export default App