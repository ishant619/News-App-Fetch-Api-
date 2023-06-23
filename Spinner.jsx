import React from 'react'
export default function Spinner(){
    return (
        <>
            <div className='container mt-5 mb-5 text-center'>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
