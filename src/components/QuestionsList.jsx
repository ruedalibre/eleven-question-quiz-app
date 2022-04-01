import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import { collection, onSnapshot } from 'firebase/firestore';
import Question from './Question'; 

const QuestionsList = () => {
    const [questions, changeQuestions] = useState([]);

    useEffect(() => {
        // Mantiene la conexión abierta con Firebase
        onSnapshot(
            collection(db, 'questions'),
            // Contiene la vista de la db
            (snapshot) => {
                // console.log("Se ejecutó snapshot")
                // console.log(snapshot.docs[1].data());
                const questionsArray = snapshot.docs.map((document) => {
                    return {...document.data(), id: document.id}
                    })
                    console.log(questionsArray)
                }
            );
    }, []);

    return (
        questions.length > 0 &&
        <ListContainer>
            {questions.map((question) => (
                <Question 
                    key={question.response_code}
                    response_code={question.response_code} 
                    category={question.category}
                    question={question.question}
                />
            ))}
        </ListContainer>
    );
}

const ListContainer = styled.div`
    margin-top: 40px;
`

export default QuestionsList