import React, { useState } from 'react'
import styled from 'styled-components'
import db from './../firebase/firebaseConfig'
// Import para agregar datos a la colección y acceder a la colección
import { collection, addDoc } from "firebase/firestore";

const AddQuestionForm = () => {
    const [response_code, changeResponseCode] = useState('');
    const [results, changeResults] = useState(''); 
    const [category, changeCategory] = useState('');
    const [subcategory, changeSubcategory] = useState('');
    const [data_type, ChangeDataType] = useState('');
    const [difficulty, changeDifficulty] = useState('');
    const [question, changeQuestion] = useState('');
    const [correct_answer, changeCorrectAnswer] = useState('');
    const [incorrect_answers, changeIncorrectAnswers] = useState('');
    
    // Evitar que la página se refresque
    const onSubmit = async (e) => {
        e.preventDefault();
        // Esperar a que cargue la db
        try {
            await addDoc(collection(db, 'quiz_cards'), {
                "response_code": response_code,
                "results": [
                {
                    "category": category,
                    "subcategory":subcategory,
                    "data_type":data_type,
                    "difficulty": difficulty,
                    "question": question,
                    "correct_answer": correct_answer,
                    "incorrect_answers":[
                        incorrect_answers
                    ]
                }]
            });
        } catch(error){
            console.log(error);
            console.log("Unexpected error while saving document")
        }
       
        // Limpiar campos
        changeResponseCode('');
        changeResults('');
        changeCategory('');
        changeSubcategory('');
        ChangeDataType('');
        changeDifficulty('');
        changeQuestion('');
        changeCorrectAnswer('');
        changeIncorrectAnswers('');
    }

    return (
        <form action="" onSubmit={onSubmit}>
            
            <Input
                type="number"
                name="response_code"
                value={response_code}
                onChange={(e) => changeResponseCode(e.target.value) }
                placeholder="Response code"
            />

            <Input
                type="text"
                name="results"
                value={[results]}
                onChange={(e) => changeResults(e.target.value) }
                placeholder="Results"
            />

            <Input
                type="text"
                name="category"
                value={category}
                onChange={(e) => changeCategory(e.target.value) }
                placeholder="Category"
            />

            <Input
                type="text"
                name="subcategory"
                value={subcategory}
                onChange={(e) => changeSubcategory(e.target.value) }
                placeholder="Subcategory"
            />

            <Input
                type="text"
                name="data_type"
                value={data_type}
                onChange={(e) => ChangeDataType(e.target.value) }
                placeholder="Data type"
            />

            <Input
                type="text"
                name="difficulty"
                value={difficulty}
                onChange={(e) => changeDifficulty(e.target.value) }
                placeholder="Difficulty"
            />

            <Input
                type="text"
                name="question"
                value={question}
                onChange={(e) => changeQuestion(e.target.value) }
                placeholder="Question"
            />

            <Input
                type="text"
                name="correct-answer"
                value={correct_answer}
                onChange={(e) => changeCorrectAnswer(e.target.value) }
                placeholder="Correct answer"
            />

            <Input
                type="text"
                name="incorrect-answers"
                value={incorrect_answers}
                onChange={(e) => changeIncorrectAnswers(e.target.value) }
                placeholder="Incorrect answers"
            />
            <Button type="submit">Add Question</Button>


        </form>
    )
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;

    &:focus {
        border: 2px solid #3D76E9;
    }
`;

const Button = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #c4c4c4;
    color: #fff;
    font-size: 12px;

    &:hover {
        background: #3d76e9;
    }
`;

export default AddQuestionForm