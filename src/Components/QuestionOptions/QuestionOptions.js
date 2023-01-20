import React from 'react';
import './QuestionOptions.css';

const QuestionOptions = ({ opt, quizClickHandler }) => {

    return (
        <div className='options'>
            <div onClick={() => quizClickHandler(opt)}>
                {opt}
            </div>
        </div>
    );
};

export default QuestionOptions;