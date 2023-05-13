import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";

const FormLogin= () => {

  const [alert, setAlert] = useState(null)
  const {token, login} = useContext(UserContext)
  
  const navigate = useNavigate()

  const handleLogin = (event) =>{
    event.preventDefault();
    let userData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log(userData)
    login(userData);
  
    if (!token) {
      console.log("wrong user")
      setAlert(<div className="alert alert-danger">Login details not correct</div>)
      setTimeout(() => {
        setAlert(null)
      }, 3000);
  
    }  else {
    setTimeout(() => {
      closeModal()
      navigate("/products")
    }, 2000);
    event.target.reset()
  }
  }
  
  return (
    <>
    <p>Login to your account</p>
    {alert}
{/* LOGIN MODAL */}
      <form onSubmit={handleLogin}>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="icon-span input-group-text">
              <i>
                <FaUser />
              </i>
            </span>
          </div>
          <input
            type="text"
            className="form-control my-input"
            placeholder="email"
            name="email"
          />
        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <span className="icon-span input-group-text">
              <i>
                <FaKey />
              </i>
            </span>
          </div>
          <input
            type="password"
            className="form-control my-input"
            placeholder="password"
            name="password"
          />
        </div>
        <div className="remember">
          <input type="checkbox" />
          Remember Me
        </div>
        <div className="form-group">
          <button type="submit" value="Login" className="btn btn-primary" >
            Login
          </button>
        </div>
      </form>
</>
  )
}

export default FormLogin