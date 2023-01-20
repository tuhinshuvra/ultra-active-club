import React, { useState } from 'react';
import QuestionOptions from '../QuestionOptions/QuestionOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Quiz.css';

const Quiz = ({ ques, index }) => {
    const [show, setShow] = useState(false);

    const options = ques.options;

    const quizClickHandler = (quiz) => {
        if (quiz === ques.correctAnswer) {
            toast("Thanks You Have Selected Correct Answer");
        } else {
            toast("Wrong Answer");
        }
    }


    return (
        <div>
            <h2>{ques.name}</h2>
            <div className=' d-flex'>
                <h5>Quiz {index + 1} :{ques.question}</h5>
                <FontAwesomeIcon onClick={() => setShow(true)} className='fw-icon' icon={faEye} />
                {show ? <div><b>Answer: </b> {ques.correctAnswer}  </div> : null}
            </div>

            <div>
                {options.map((opt, index) => <QuestionOptions
                    key={index}
                    opt={opt}
                    quizClickHandler={quizClickHandler}
                ></QuestionOptions>)}
            </div>
            <ToastContainer />

        </div>
    );
};

export default Quiz;