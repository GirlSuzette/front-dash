import React, { Component } from 'react'
import img from '../../image/well.gif'
import './home.css'

export default class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='contHome'>
          <img src={img} alt='Smiley face' />
        </div>
      </React.Fragment>
    )
  }
}
