import React from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const BeginButton = ({route = '/QuizScreen'}) => {
	const navigate = useNavigate();

	return (
        <Button onClick={() => navigate(route)}>BEGIN</Button>
  )
}

export default BeginButton