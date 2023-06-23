import React,{Component} from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component{
  render(){
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Politics</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/crime">Crime</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/education">Education</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/jokes">Jokes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </> 



    )
}
}