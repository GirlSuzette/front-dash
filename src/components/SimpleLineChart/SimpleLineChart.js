import React from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import LineChart from 'recharts/lib/chart/LineChart'
import Line from 'recharts/lib/cartesian/Line'
import XAxis from 'recharts/lib/cartesian/XAxis'
import YAxis from 'recharts/lib/cartesian/YAxis'
import Tooltip from 'recharts/lib/component/Tooltip'
import Legend from 'recharts/lib/component/Legend'
import Typography from '@material-ui/core/Typography'
import Chart from '../Chart/Chart'
import { CartesianGrid } from 'recharts'
import './lineChart.css'

const data = [
  { name: 'Nodejs', Porcentaje: 80 },
  { name: 'JS', Porcentaje: 80 },
  { name: 'React', Porcentaje: 60 },
  { name: 'css', Porcentaje: 50 },
  { name: 'Material', Porcentaje: 70 }
]

function SimpleLineChart () {
  return (
    <React.Fragment>
      <div className='contaTable lineChart'>
        <div>
          <Chart />
        </div>
        <Typography variant='h4' gutterBottom component='h4'>
          Skills
        </Typography>
        <ResponsiveContainer width='100%' height={320}>
          <LineChart data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='Porcentaje' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  )
}

export default SimpleLineChart
