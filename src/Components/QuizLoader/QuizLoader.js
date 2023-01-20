import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizLoader.css';

const QuizLoader = () => {
    const quizData = useLoaderData();
    const allQuiz = quizData.data;

    const allQuestions = allQuiz.questions;

    return (
        <div className=' container'>
            <h2 className=' text-center mb-5 '> Quiz of {allQuiz.name}</h2>
            {allQuestions.map((ques, index) => <Quiz
                key={ques.id}
                index={index}
                ques={ques}
            ></Quiz>)}
        </div>
    );
};

export default QuizLoader;