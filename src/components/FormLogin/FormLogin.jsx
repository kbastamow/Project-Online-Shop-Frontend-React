import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import { ModalContext } from "../../context/ModalContext/ModalState";

const FormLogin= () => {

  const [alert, setAlert] = useState("")
  const {token, login, loginMsg, clearMessages} = useContext(UserContext)
  const {closeForm} = useContext(ModalContext)

  // const navigate = useNavigate()





  const handleLogin = (event) =>{
    event.preventDefault();
    let userData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    console.log(userData)
    setAlert(<div className="alert">
      <div>Please wait...</div>
      <div className="spinner-border spinner-border-sm" role="status"/>  
    </div>)
    login(userData)
  }

  useEffect(() => {
    console.log("login message changing: ", loginMsg)

    if(token && loginMsg) {
    setAlert(<div className="alert">Logged in!</div>)
    setTimeout(() => {
      // setAlert(null)
      closeForm();
      clearMessages()
    }, 3000) 
  } else if (!token && loginMsg.length > 0){  // .length
    console.log("wrong user")
    setAlert(<div className="alert">Login details not correct</div>)
    clearMessages()
    // setTimeout(() => {
    //   setAlert(null)
    // }, 3000);
  }}, [loginMsg])




  return (
    <>
    <p className="text-center">Login to your account</p>
    <div className="d-flex justify-content-center">
    {alert}
    </div>

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
        <div className="remember my-2 text-center">
          <input type="checkbox" />
          Remember Me
        </div>
        <div className="form-group d-flex justify-content-center">
          <button type="submit" value="Login" className="dark-button-blue px-4 my-2" >
            Login
          </button>
        </div>
      </form>
</>
  )
}

export default FormLogin