import React from "react";
import FinalScore from '../elements/FinalScore'
import AnswerList from '../elements/AnswerList'
import Button from './../elements/Button'

import React from 'react'

const ScoreScreen = () => {
  return (
    <>
        <FinalScore />
        <AnswerList />
        <Button black>Play Again!</Button>
    </>
  )
}

export default ScoreScreen