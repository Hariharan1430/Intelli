'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const dataMentions = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D', uv: 2780 },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];

export default class TinyAreaChartMentions extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={60}>
        <AreaChart
          data={dataMentions}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
