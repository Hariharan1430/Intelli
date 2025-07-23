'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const dataReach = [
  { name: 'Page A', uv: 2400 },
  { name: 'Page B', uv: 1398 },
  { name: 'Page C', uv: 9800 },
  { name: 'Page D', uv: 3908 },
  { name: 'Page E', uv: 4800 },
  { name: 'Page F', uv: 3800 },
  { name: 'Page G', uv: 4300 },
];

export default class TinyAreaChartReach extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={60}>
        <AreaChart
          data={dataReach}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
