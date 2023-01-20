import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header container">
            <div className='header_main'>
                <img src="../../img/quiz_logo.png" alt="" />
                <h2 className=' text-center my-3 fw-bolder text-primary'>Welcome to Dev Quiz</h2>
            </div>
            <h5 className=" text-center ">Get a chance to check your Development knowledge and explore yourself.</h5>
            <h5 className=" text-center ">You are exactly that are you deeply thought about you.</h5>
        </div>
    );
}

export default Header;