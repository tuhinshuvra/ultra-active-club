import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics'
import './Home.css';

const Home = () => {
    const topicsData = useLoaderData();
    const allTopics = topicsData.data;

    return (
        <div>
            <Header></Header>
            <div>
                <div className='home'>
                    {allTopics.map(topics => <Topics
                        key={topics.id}
                        topics={topics}
                    ></Topics>)}
                </div>
            </div>
        </div>
    );
};

export default Home;