import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { data } from '../data/data';

const CustomChart = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomChart
