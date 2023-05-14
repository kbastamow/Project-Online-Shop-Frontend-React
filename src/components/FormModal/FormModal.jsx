import React, { useState, useEffect, useContext, useRef } from "react";
// import { FaUser, FaKey } from "react-icons/fa";
// import { UserContext } from "../../context/UserContext/UserState";
// import { useNavigate } from "react-router-dom";
// import { Modal } from "bootstrap";
import FormLogin from "../FormLogin/FormLogin";
import FormRegister from "../FormRegister/FormRegister";
import logosm from "../../assets/logosmall2.png"
import "./FormModal.scss"
import Modal from "react-bootstrap/Modal"
import {ModalContext} from "../../context/ModalContext/ModalState";


const FormModal = () => {

const [formOnDisplay, setFormOnDisplay] = useState(null)
const [toggleForms, setToggleForms] = useState(null)
const {formModal, closeForm, openForm} = useContext(ModalContext)


useEffect(()=>{
  console.log("changing state", formModal)
}, [formModal])



useEffect(() => {
  seeLogin()
}, []);

const seeRegistration = () => {
  setFormOnDisplay(<FormRegister/>)
  setToggleForms(<>Already registered? <span className ="secondary-emphasized form-link" onClick={()=>seeLogin()}>Login here</span></>)
  
}

const seeLogin = () => {
  setFormOnDisplay(<FormLogin/>)
  setToggleForms(<>New user? <span className ="secondary-emphasized form-link" onClick={()=>seeRegistration()}>Register here</span></>)
}



  return (
    <>
    <Modal 
        show={formModal}
        backdrop="true"
        keyboard={false}
        // onHide={closeForm}
        dialogClassName
        >
      {/* <div ref={modalRef} className="form-div modal fade" show="false" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel"
        aria-hidden="false"> */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img src={logosm} alt="logo" className="modal-title ms-auto" />
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                onClick={() => closeForm()}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">


              {formOnDisplay}

              <div className="text-center">

              {toggleForms}

              </div>

            </div>
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      {/* </div> */}
      </Modal>
    </>
  );
};

export default FormModal



  // //CLOSES AND SHOWS MODAL 
  // const modalRef = useRef(null);
  // const [modal, setModal] = useState("")
  // const showModal = () => {
  //   modal.show();
  // }
  // const closeModal = () => {
  //   modal.hide();
  //   console.log("hidden")
  // }
  // useEffect(() => {
  //   if (modalRef.current) {
  //     setModal(new Modal(modalRef.current));
  //     // If you want to do something else when the modal show is added, add this line
  //     // modalRef.current.addEventListener('show.bs.modal', myFunction) first, the default, and second, your function (e.g. a message)
  //   }
  //   return () => {
  //     // if (modalRef.current) {
  //     //   modalRef.current.removeEventListener();
  //     // }
  //   };
  // }, []);
