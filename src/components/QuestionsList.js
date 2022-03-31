import React, { useState} from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'

const QuestionsList = () => {
    const [questions, changeQuestions] = useState([
        {
            response_code: 0,
            results: [
                {
                    category: "General Knowledge",
                    subcategory: undefined,
                    data_type: "boolean",
                    difficulty: "hard",
                    question: "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
                    correct_answer: "True",
                    incorrect_answers:[
                        "False"
                    ]
                }
            ]},

            {
                response_code: 1,
                results: [
                {
                    category: "Entertainment",
                    subcategory: "Video Games",
                    data_type: "boolean",
                    difficulty: "hard",
                    question: "Unturned originally started as a Roblox game.",
                    correct_answer :"True",
                    incorrect_answers: [
                        "False"
                    ]
                }
            ]}
    ]);

    return (
        questions.length > 0 &&
        <ListContainer>
            {questions.map((question) => (
                <p key={question.response_code}>{question.question} - {question.difficulty}</p>
            ))}
        </ListContainer>
    );
}

const ListContainer = styled.div`
    margin-top: 40px;
`

export default QuestionsList