import React, { Component } from 'react'
import { jobsList } from '../../Data/datasource'
import Job from '../Job/Job'

class WorkHistory extends Component {
  render () {
    return (
      <div className='contaTable'>
        <section>
          <h4>Work Experience</h4>
          <div className='skills-list'>
            {jobsList.map(function (objJob) {
              return <Job description={objJob} />
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default WorkHistory
