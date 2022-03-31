import React from 'react'
import data from '../data/data'
import { useParams } from 'react-router-dom'

const QuestionCard = () => {
  const {id} = useParams();

  return (
    <div>
      <h1>{data[id -1].question}</h1>
    </div>
  );
}

export default QuestionCard;