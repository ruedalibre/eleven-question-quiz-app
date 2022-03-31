import React from 'react'
import dataObjects from '../data/data'

const QuestionCard = () => {
  return (
    <div>
      {dataObjects.map((dataObjects) => {
                  return <Question key={dataObjects.id}>{dataObjects.dataObjects}</Question>
                })}
    </div>
  )
}

export default QuestionCard