import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">News App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/crime">Crime</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/sport">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/jokes">Jokes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
