import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logosm from "../../assets/logosmall2.png"
import "./Header.scss"
import { UserContext } from '../../context/UserContext/UserState';
import { ModalContext } from '../../context/ModalContext/ModalState';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
   
  const location = useLocation()
  const {token, user} = useContext(UserContext)
  const {openForm} = useContext(ModalContext)

  let loggedInUser = JSON.parse(localStorage.getItem("shopuser")) 
  let greetingUser;

  console.log(loggedInUser,  "user who is logged in")
  
  if (loggedInUser) {
    greetingUser = loggedInUser.name
   } else {
    greetingUser = ""
   }

  let loggedInToken = JSON.parse(localStorage.getItem("shoptoken")) || ""
 
  let navbarLeft = (loggedInToken) ? (
    <div className="welcome-div">Welcome {loggedInUser.name} <span className="cart-icon ms-3" data-bs-toggle="modal" data-bs-target="#cartModal">
      <FaShoppingCart></FaShoppingCart>
    </span></div>)  :  (<div className="login-div me-2 px-4 py2" onClick={openForm}>Login/register</div>)




// console.log(location)
// if(location.pathname === "/") {
//   return <>
//   <div className="main-navbar p-3">
//    <img src={logosm} alt="logo" />
//    </div>
//   </>

// }


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
          <div className="collapse navbar-collapse col-8" id="navbarTogglerDemo01">
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
              {token ?  <li className="nav-item">
                <Link to="/profile">
                <span className="nav-link">Profile</span>
                </Link>
              </li> : <></>}

{!user || (user.role === "user") ? <></> : 
              <li className="nav-item">
                <Link to="/admin">
                <span className="nav-link">Admin</span>
                </Link>
              </li>
           } 
            
            </ul>
          </div>
                <div className="col-4">
            {/* d-flex flex-wrap me-4 mb-2 mb-lg-0 */}

            {(location.pathname === "/") ? <></> : <>{navbarLeft}</>}


              
            </div>
        
        </div>
      </nav>
    </div>
  );
};

export default Header;