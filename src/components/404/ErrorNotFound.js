import React, { Component } from 'react'
import img from '../../image/not_found.gif'
import './Erro.css'

export default class ErrorNotFound extends Component {
  render () {
    return (
      <div className='contaTable'>
        <div id='error'>
          <h1 className='notFoundTitle'>Oops! That page can’t be found.</h1>
          <p className='notFoundDesc'>
            It looks like nothing was found at this location. Maybe try one of
            the links in the menu or press back to go to the previous page.
          </p>
          <div className='imgError'>
            <img src={img} alt='Smiley face' />
          </div>
        </div>
      </div>
    )
  }
}
