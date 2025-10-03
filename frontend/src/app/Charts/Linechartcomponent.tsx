'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: '1 May', mentions: 10, reach: 200000 },
  { date: '2 May', mentions: 15, reach: 400000 },
  { date: '3 May', mentions: 8, reach: 300000 },
  { date: '4 May', mentions: 12, reach: 350000 },
  { date: '5 May', mentions: 6, reach: 150000 },
  { date: '6 May', mentions: 10, reach: 250000 },
  { date: '7 May', mentions: 14, reach: 400000 },
];

const SimpleLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" orientation="left" stroke="#2f77eb" />
      <YAxis yAxisId="right" orientation="right" stroke="#76c7c0" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line yAxisId="left" type="monotone" dataKey="mentions" stroke="#2f77eb" activeDot={{ r: 8 }} />
      <Line yAxisId="right" type="monotone" dataKey="reach" stroke="#76c7c0" />
    </LineChart>
  </ResponsiveContainer>
);

export default SimpleLineChart;
