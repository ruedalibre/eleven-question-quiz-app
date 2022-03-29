import React from "react";
import FinalScore from './../elementos/FinalScore'
import AnswerList from './../elementos/AnswerList'
import { PlayAgainButton } from "./../elementos/Button";

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