import React, { useState, useEffect, useContext, useRef } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";


const Login = () => {
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [alert, setAlert] = useState(null)
  const [loginSubmitDisabled, setLoginBtnDisabled] = useState("true")
  const {token, login, register, registrationMsg} = useContext(UserContext)

  // const {login, } = useContext(UserContext)
  
  const navigate = useNavigate()

  //REGISTER
const [nameDisabled, setNameDisabled] = useState(true)
const [surnameDisabled, setSurnameDisabled] = useState(true)
const [passwordDisabled, setPasswordDisabled] = useState(true)
const [regSubmitDisabled, setRegSubmitDisabled] = useState(true);
const [conditionsCheck, setConditionsCheck] = useState(false)

// const [registerEmail, setRegisterEmail] = useState("")
// const [registerName, setRegisterName] = useState("")
// const [registerSurname, setRegisterSurname] = useState("")
// const [registerPassword, setRegisterPassword] = useState("")



// const handleEmailChange = (e) => {
//   setRegisterEmail(e.target.value);
//   console.log(registerEmail);
// }


// useEffect((event) => {
//   setRegisterEmail(event.target.value)
//   console.log(registerEmail)
//   // setData(prevState => ({
//   //   ...prevState,
//   //   email: registerEmail
// }, [registerEmail]);

 
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




    // const [btnDisabled, setBtnDisabled] = useState(true)

  

//CLOSES AND SHOWS MODAL ON BUTTON CLICK
  const modalRef = useRef(null);
  const [modal, setModal] = useState("")
  
  const showModal = () => {
    modal.show();
  }
const closeModal = () => {
    modal.hide();
    console.log("hidden")
  }
  useEffect(() => {
    if (modalRef.current) {
      setModal(new Modal(modalRef.current));
      // If you want to do something else when the modal show is added, add this line
      // modalRef.current.addEventListener('show.bs.modal', myFunction) first, the default, and second, your function (e.g. a message)

    }
    return () => {
      // if (modalRef.current) {
      //   modalRef.current.removeEventListener();
      // }
    };
  }, []);

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
    console.log(registrationMsg)
    if (registrationMsg){
      console.log(registrationMsg)
      setAlert(<div className="alert alert-success">{registrationMsg}<br/><div className="spinner-border spinner-border-sm" role="status"/></div>)
      setTimeout(() => {
        closeModal()
        navigate("/products")
        setAlert(null)
      }, 5000);
  }}, [registrationMsg])


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
      <div ref={modalRef} className="modal fade" show="false" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel"
        aria-hidden="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Login to your account</h1>

              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
            {alert}

{/* LOGIN MODAL */}

              <form onSubmit={handleLogin}>
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
                    name="email"
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
                  />
                </div>
                <div className="remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <button type="submit" value="Login" className="btn" >
                    Login
                  </button>
                </div>
              </form>
{/* LOGIN MODAL END*/}

{/* REGISTER MODAL */}
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
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login
