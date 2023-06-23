import React, { Component } from 'react'
import pic from "./noimagep.png"

export default class News extends Component{
  render() {
    return (
        <>
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="card">
  <img src={this.props.pic?this.props.pic:pic} height="150px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6 className="card-title" style={{height:"100px"}}>{this.props.title.slice(0,100)+"..."}</h6>
    <h6 style={{fontSize:"12px"}}>{this.props.date}</h6>
    <h6 style={{fontSize:"12px"}}>Author:{this.props.author?this.props.author:"Unknown"}</h6>
    <hr/>
    <p className="card-text" style={{height:"200px"}}>{this.props.description?this.props.description.slice(0,200)+"...":""}</p>
    <a href={this.props.url} target="_blank" className="btn btn-primary w-100">Read Full Article</a>
  </div>
  </div>
  </div>
      </>
    )
  }
}
