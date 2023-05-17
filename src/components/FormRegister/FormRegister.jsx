import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext/ModalState";


const FormRegister = () => {
    const navigate = useNavigate()

  const [alert, setAlert] = useState("")
  const {register, registrationMsg, clearMessages} = useContext(UserContext)
  const [nameDisabled, setNameDisabled] = useState(true)
  const [surnameDisabled, setSurnameDisabled] = useState(true)
  const [passwordDisabled, setPasswordDisabled] = useState(true)
  const [regSubmitDisabled, setRegSubmitDisabled] = useState(true);
  const [conditionsCheck, setConditionsCheck] = useState(true)
  const {closeForm, formModal} = useContext(ModalContext)

  const [data, setData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    passwordRepeat: "",
  });

  const handleInputChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.value  });
      
      if(/(\w+?@\w+?\x2E.+)/.test(data.email)) setNameDisabled(false)

      if (data.name.length + 1 > 2) setSurnameDisabled(false)

      if (data.surname.length + 1 > 2) setPasswordDisabled(false)

      if (data.password && data.passwordRepeat) setRegSubmitDisabled(false)
    }

    const handleRegister = (event) => {
        setAlert(<><div className="secondary-emphasized">Please wait...</div><div className="spinner-border spinner-border-sm" role="status"/></>)
        event.preventDefault();
        if (data.password !== data.passwordRepeat) {
          setAlert(<div className="secondary-emphasized" >Passwords don't match</div>)
          setTimeout(() => {
            setAlert(null)
          }, 3000) 

        } else {
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
          register(registerData)
          event.target.reset()
        }
      }

useEffect(() => {

    if (registrationMsg == "Please check your email to confirm registration!"){
        setAlert(<div className="secondary-emphasized">NEW USER REGISTERED!<br/> Check your email to complete registration!</div>)
        setRegSubmitDisabled(true)
        clearMessages()
        setTimeout(() => {
          closeForm()
        }, 4000);

      } else if (registrationMsg == "email must be unique"){
        setAlert(<div className="secondary-emphasized mb-4">This email is already registered</div>)
        clearMessages()
      } 
    }, [registrationMsg])


  return (
    <div>
    <p className="text-center">Create an account</p>
    <div className="mx-auto mb-3 text-center">
      {alert}
          </div>
    <form onSubmit={handleRegister}>
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
                        value={data.email}
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
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
                        placeholder="name"
                        name="name"
                        onChange={handleInputChange}
                        disabled = {nameDisabled}
                      />
                    </div>

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
                        placeholder="surname"
                        name="surname"
                        disabled = {surnameDisabled}
                        onChange={handleInputChange}
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
                        disabled = {passwordDisabled}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className=" icon-span input-group-text">
                          <i>
                            <FaKey />
                          </i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control my-input"
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
                    <div className="form-group d-flex justify-content-center">
                      <button type="submit" value="Login" className="dark-button-blue px-4 my-2" disabled={regSubmitDisabled}>
                        Register
                      </button>
                    </div>
                  </form>
    </div>
  )
}

export default FormRegister