import React from 'react'
import data from '../data/Data'
import { useParams, Navigate } from 'react-router-dom'

const QuestionCard = () => {
  const {id} = useParams();

  return (
    <>
      {data[id -1] ?
        <CardsContainer>
          <h1>{data[id -1].question}</h1>
        </CardsContainer>
      :
        <Navigate replace to="/"/>
      }
    </>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default QuestionCard;