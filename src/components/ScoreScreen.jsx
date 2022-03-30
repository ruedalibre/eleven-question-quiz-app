import React from "react";
import FinalScore from '../elements/FinalScore'
import AnswerList from '../elements/AnswerList'
import { PlayAgainButton } from "../elements/Button";

import React from 'react'

const ScoreScreen = () => {
  return (
    <>
        <FinalScore />
        <AnswerList />
        <PlayAgainButton />
    </>
  )
}

export default ScoreScreen