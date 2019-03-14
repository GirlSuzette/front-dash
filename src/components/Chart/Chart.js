import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import './chart.css'

export default class DashIncome extends Component {
  render () {
    const data = {
      labels: [''],
      datasets: [
        {
          label: 'Nodejs',
          data: ['80'],
          backgroundColor: ['rgba(25, 252, 86, 0.9)'],
          borderWidth: 2
        },
        {
          label: 'JavaScript',
          data: ['80'],
          backgroundColor: ['rgba(255, 252, 86, 0.9)'],
          borderWidth: 2
        },
        {
          label: 'css',
          data: ['60'],
          backgroundColor: ['rgba(255, 9, 131, 0.9)'],
          borderWidth: 2
        },
        {
          label: 'Html',
          data: ['50'],
          backgroundColor: ['rgba(255, 2, 86, 0.9)'],
          borderWidth: 2
        },
        {
          label: 'React',
          data: ['60'],
          backgroundColor: ['rgba(153, 102, 255, 0.9)'],
          borderWidth: 2
        },
        {
          label: 'Material',
          data: ['70'],
          backgroundColor: ['rgba(255, 159, 64, 0.9)'],
          borderWidth: 2
        }
      ]
    }

    const options = {
      duration: 12000,
      title: {
        display: true,
        text: 'Software skills',
        fontSize: 20
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
    return (
      <React.Fragment>
        <div className='chartBar'>
          <Bar data={data} width={100} height={450} options={options} />
        </div>
      </React.Fragment>
    )
  }
}
