import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"><span className="nav-link active" aria-current="page">Home</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/products"><span className="nav-link" href="#">Products</span></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search by category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}

      </ul>
     
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
<div className="">
    <ul className="d-flex flex-nowrap me-4 mb-2 mb-lg-0">
      <li className="nav-item me-2 px-4 d-block">Login</li>
      <li className="nav-item me-2 px-4 d-block">Register</li>
      </ul>
      </div>
  </div>
</nav>
        



    </div>
  )
}

export default Header