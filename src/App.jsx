import React from 'react'
import Button from './components/Button'

const App = () => {
//   return (
    <>
        <div className='main-container'>
            <div className='static-text'>
                <h1>Welcome to the Trivia Challenge!</h1>
                <p>You will be presented with 11 True or False Questions</p>
                <p>Can You score 100%?</p>
            </div>
            <div>
                <Button>BEGIN</Button>
            </div>
        </div>
    </>
//   )
}

export default App