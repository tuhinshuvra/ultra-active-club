import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({ topics }) => {
    const { id, logo, name, total } = topics;

    return (
        <div className='topics'>
            <img src={logo} alt="" />
            <div className='name_no'> <span> {name} </span> <span> Total: {total} Quiz</span></div>
            <Link to={`/quiz/${id}`}> <button> Start Quiz</button> </Link>
        </div>
    );
};

export default Topics;