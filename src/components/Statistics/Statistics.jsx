// import React from 'react';
import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Assignment 1',
        number: 60,
        pv: 60,
        amt:60,
    },
    {
        name: 'Assignment 2',
        number:  59,
        pv: 60,
        amt:  60,
    },
    {
        name: 'Assignment 3',
        number:  60,
        pv:  60,
        amt:  60,
    },
    {
        name: 'Assignment 4',
        number:  60,
        pv: 60,
        amt:  60,
    },
    {
        name: 'Assignment 5',
        number:  60,
        pv:  60,
        amt:  60,
    },
    {
        name: 'Assignment 6',
        number:  47,
        pv:  60,
        amt:  60,
    },
    {
        name: 'Assignment 7',
        number:  59,
        pv:  60,
        amt:  60,
    },
    {
        name: 'Assignment 8',
        number:  60,
        pv:  60,
        amt:  60,
    },
]

const Statistics = () => {
    return (
        <div className='container mx-auto flex py-5  justify-center'>
            <ComposedChart
                width={1500}
                height={800}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="number" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="number" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;