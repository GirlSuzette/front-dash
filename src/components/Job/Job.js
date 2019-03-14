import React, { Component } from 'react'

class Job extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='job'>
        <div className='job__years'>
          <h6 className='job__end'>{this.props.description.years.end}</h6>
          <h6 className='job__start'>{this.props.description.years.start}</h6>
        </div>
        <h5 className='job__title'>{this.props.description.title}</h5>
        <h5 className='job__company'>{this.props.description.company}</h5>
        <p className='job__description'>{this.props.description.description}</p>
      </div>
    )
  }
}

export default Job
