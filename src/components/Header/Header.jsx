import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logosm from "../../assets/logosmall2.png"
import "./Header.scss"
import { FaUser } from "react-icons/fa";
import { UserContext } from '../../context/UserContext/UserState';


const Header = () => {

  const {token, user} =useContext(UserContext)
 

  let navbarLeft = (token) ? (
    <div className="welcome-div ">Welcome<button className="ms-3 padding-2" data-bs-toggle="modal" data-bs-target="#cartModal"><FaUser></FaUser></button></div>
    )  :  (<div className="login-div me-2 px-4 py2" data-bs-toggle="modal" data-bs-target="#loginModal">Login/register</div>)

  return (
    <div className="main-navbar">
      <nav className="main-navbar navbar navbar-expand-lg bg-light p-0">
        <div className="container-fluid py-2 py-md-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={logosm} alt="logo" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">
                  <span className="nav-link active" aria-current="page">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products">
                  <span className="nav-link" href="#">
                    Products
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin">
                <span className="nav-link">Admin</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="d-flex flex-wrap me-4 mb-2 mb-lg-0">

              {navbarLeft}

              {/* <div className="login-div nav-item me-2 px-4 py2" data-bs-toggle="modal" data-bs-target="#loginModal"><i className="me-1"><FaUser></FaUser></i>Login/register</div> */}
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;