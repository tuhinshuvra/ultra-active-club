import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    // const { id, name, total } = quiz;
    const quiz =
    {
        "status": true,
        "data": [
            {
                "id": 1,
                "name": "React",
                "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
                "total": 8
            },
            {
                "id": 2,
                "name": "JavaScript",
                "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
                "total": 9
            },
            {
                "id": 4,
                "name": "CSS",
                "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
                "total": 8
            },
            {
                "id": 5,
                "name": "Git",
                "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
                "total": 11
            }]
    }

    return (
        <div className=' d-flex flex-column align-items-center '>
            <h1 className=' container fw-bold text-info my-5 text-center'>Quiz Total Line Chart</h1>
            <LineChart width={480} height={300} data={quiz.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#006400" />
            </LineChart>

        </div>
    );
};

export default Statistics;