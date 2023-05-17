import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import { ModalContext } from "../../context/ModalContext/ModalState";

const FormLogin= () => {

  const [alert, setAlert] = useState("")
  const {token, login, loginMsg, clearMessages, user} = useContext(UserContext)
  const {closeForm} = useContext(ModalContext)

  const handleLogin = (event) =>{
    event.preventDefault();
    
    if (!event.target.email.value || !event.target.password.value) {
      return setAlert(<div className="secondary-emphasized">Complete all fields</div>)
    } 

    let userData = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    setAlert(<><div className="secondary-emphasized">Please wait...</div><div className="spinner-border spinner-border-sm" role="status"/></>) 
    console.log(userData)
    login(userData)
    // setTimeout(() => {
    //   if(user === null){
    //     setAlert(<><div className="secondary-emphasized">Something went wrong!</div></>)   
    //     setTimeout(() => {
    //       setAlert(null)
    //     }, 3000) 
    //   }
    // }, 5000);
  }

  useEffect(() => {
    console.log(!token)
  
    if(token && loginMsg) {
    setAlert(<div className="alert">Logged in!</div>)
    setTimeout(() => {
      closeForm();
      clearMessages()
    }, 3000) 
  } else if ((!token)  && (loginMsg.length > 0)){  
    setAlert(<div className="alert">Login details not correct</div>)
    console.log(loginMsg, "inside else if")
    setTimeout(() => {
      setAlert(null)
      clearMessages()
    }, 3000) 
  }}, [loginMsg])

  console.log("This is login message outside function", loginMsg)


  return (
    <>
    <p className="text-center">Login to your account</p>
    <div className="d-flex justify-content-center my-2">
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