import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <>
        <div className='container mt-5 mb-5 text-center'>
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    </>
    )
  }
}
