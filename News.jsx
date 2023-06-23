import React from 'react'
import pic from "./noimagep.png"
export default function News(props) {
    return (
        <>
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card">
                    <img src={props.pic ? props.pic : pic} height="150px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title" style={{ height: "100px" }}>{props.title.slice(0, 100) + "..."}</h6>
                        <h6 style={{ fontSize: "12px" }}>Author : {props.author ? props.author : "Unknown"}</h6>
                        <h6 style={{ fontSize: "12px" }}>{props.date}</h6>
                        <hr />
                        <p className="card-text" style={{ height: "200px" }}>{props.description ? props.description.slice(0, 200) + "..." : ""}</p>
                        <a href={props.url} target="_blank" className="btn btn-success w-100">Read Full Article</a>
                    </div>
                </div>
            </div>
        </>
    )
}
