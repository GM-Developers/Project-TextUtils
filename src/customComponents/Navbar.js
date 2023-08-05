import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {


const handleBackground = {
  mystyle1:{
    backgroundColor: "#df80ff",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  },
  mystyle2:{
    backgroundColor: "#ff704d",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  },
  mystyle3:{
    backgroundColor: "#ff4da6",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  }
}

  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-${props.yellow} bg-${props.yellow} navbar-${props.orange} bg-${props.orange} navbar-${props.red} bg-${props.red} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.textAbout}</Link>
        </li>
      </ul>

      <span className="me-2" style={handleBackground.mystyle1} onClick={props.toggleYellow}></span>
      <span className="me-2" style={handleBackground.mystyle2} onClick={props.toggleOrange}></span>
      <span className="me-2" style={handleBackground.mystyle3} onClick={props.toggleRed}></span>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>

    </div>
  </div>
  { /*<nav className="navbar bg-body-tertiary">
   <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div> 
  </nav> */}
</nav>

  )
}

Navbar.propTypes = {title:  PropTypes.string,
                    textAbout: PropTypes.string}