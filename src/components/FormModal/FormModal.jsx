import React, { useState, useEffect, useContext, useRef } from "react";
import FormLogin from "../FormLogin/FormLogin";
import FormRegister from "../FormRegister/FormRegister";
import logosm from "../../assets/logosmall2.png"
import "./FormModal.scss"
import Modal from "react-bootstrap/Modal"
import {ModalContext} from "../../context/ModalContext/ModalState";


const FormModal = () => {

const [formOnDisplay, setFormOnDisplay] = useState(null)
const [toggleForms, setToggleForms] = useState(null)
const {formModal, closeForm} = useContext(ModalContext)

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
        onHide={closeForm}
        centered
        size="sm"
        dialogClassName
        >
           
          <div className="modal-content">
          <Modal.Header>
              <img src={logosm} alt="logo" className="modal-title ms-auto" />
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                onClick={() => closeForm()}
                aria-label="Close"
              ></button>
           </Modal.Header> 

            <Modal.Body>

              {formOnDisplay}

              <div className="text-center">

              {toggleForms}

              

            </div>
            </Modal.Body>
        
          </div>
        
      {/* </div> */}
      </Modal>
    </>
  );
};

export default FormModal
