import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";


const FormRegister = () => {
    const navigate = useNavigate()

  const [alert, setAlert] = useState(null)
  const {register, registrationMsg} = useContext(UserContext)
  const [nameDisabled, setNameDisabled] = useState(true)
  const [surnameDisabled, setSurnameDisabled] = useState(true)
  const [passwordDisabled, setPasswordDisabled] = useState(true)
  const [regSubmitDisabled, setRegSubmitDisabled] = useState(true);
  const [conditionsCheck, setConditionsCheck] = useState(false)
  
  
  const [data, setData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    passwordRepeat: "",
  });
  
  const handleInputChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.value  });
      console.log(data)
  
      if(/(\w+?@\w+?\x2E.+)/.test(data.email)) setNameDisabled(false)  
  
      if (data.name.length + 1 > 2) setSurnameDisabled(false)
  
      if (data.surname.length + 1 > 2) setPasswordDisabled(false)
  
      if (data.password && data.passwordRepeat) setRegSubmitDisabled(false)
    }
  
    const handleRegister = (event) => {
        event.preventDefault();
        console.log("registerfunction to be written")
        if (data.password !== data.passwordRepeat) {
          setAlert(<div className="alert alert-danger">Passwords don't match</div>)
          setTimeout(() => {
            setAlert(null)
          }, 3000);
    
        } else {
          console.log("Registering")
    
          //DELETE Whitespaces
          let email = data.email.trim()
          let password = data.password.trim()
    
          //Delete whitespaces and TURN name and surname to first letter uppercase
          let name = data.name.trim().toLowerCase();
          if (name.includes(' ')) {
            const nameParts = name.split(' ');
            // Capitalize each part separately and join them back into a single string
            name = nameParts.map(part =>
              part.charAt(0).toUpperCase() + part.slice(1)
            ).join(' ');
          } else {
            // Capitalize only the first letter of the name
            name = name.charAt(0).toUpperCase() + name.slice(1);
          }
    
          let surname = data.surname.trim().toLowerCase();
          if (surname.includes(' ')) {
            const nameParts = surname.split(' ');
            surname = nameParts.map(part =>
              part.charAt(0).toUpperCase() + part.slice(1)
            ).join(' ');
          } else {
            surname = surname.charAt(0).toUpperCase() + surname.slice(1);
          }
    
          let registerData = { email, name, surname, password }
          console.log(registerData)
          register(registerData)
          event.target.reset()
          
        }
      }
    
      useEffect(() => {
        if (registrationMsg === "Please check your email to confirm registration!"){
          setAlert(<div className="alert alert-success">{registrationMsg}<br/><div className="spinner-border spinner-border-sm" role="status"/></div>)
          setTimeout(() => {
            {props.closeModal()}
            navigate("/products")
            setAlert(null)
          }, 4000);
      } else if (registrationMsg === "email must be unique"){
        console.log(registrationMsg)
        setAlert(<div className="alert alert-danger">This email is already registered</div>)
        setTimeout(() => {
          setAlert(null)
        }, 4000);
      }
      return
    }, [registrationMsg])
    
    
    



  return (
    <div>{/* REGISTER MODAL */}
    <p>Create an account</p>
                {alert}
    <form onSubmit={handleRegister}>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>
                            <FaUser />
                          </i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        value={data.email}
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>
                            <FaUser />
                          </i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        value={data.name}
                        name="name"
                        onChange={handleInputChange}
                        disabled = {nameDisabled}
                      />
                    </div>
    
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>
                            <FaUser />
                          </i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="surname"
                        name="surname"
                        disabled = {surnameDisabled}
                        onChange={handleInputChange}
                      />
                    </div>
    
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>
                            <FaKey />
                          </i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        disabled = {passwordDisabled}
                        onChange={handleInputChange}
                      />
                    </div>
    
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i>
                            <FaKey />
                          </i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="passwordRepeat"
                        disabled = {passwordDisabled}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    
                    <div className="remember">
                      <input type="checkbox" checked={conditionsCheck} name="conditionsCheck" onClick={()=> setConditionsCheck(!conditionsCheck)}/>
                      I agree to the terms and conditions
                    </div>
                    <div className="form-group">
                      <button type="submit" value="Login" className="btn" disabled={regSubmitDisabled}>
                        Register
                      </button>
                    </div>
                  </form>
    </div>
  )
}

export default FormRegister