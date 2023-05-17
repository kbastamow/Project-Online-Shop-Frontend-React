import React from 'react'
import "./Footer.scss"
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaTiktok,} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footer-div  bg-light container-fluid z-1">

        <div className="d-flex flex-row mx-5 mt-1">

          <div className="d-flex flex-column flex-grow-1">
            <p>Connect</p>
            <div>
              <i><FaFacebookSquare /></i>
              <i><FaInstagram /></i>
              <i><FaTiktok /></i>
              <i><FaTwitterSquare /></i>
            </div>
          </div>

          <div className="d-flex flex-column flex-grow-1">
            <p>Contact</p>
            <div>
              <div>Tfno: (+99) 999 821 662</div>
              <div>info@soundbbase.base</div>
            </div>

          </div>

          <div className="d-flex flex-column flex-grow-1">
            <p>Customer service</p>

            <div>
              <div>Shipping & Payments</div>
              <div>Customer Support</div>

            </div>
          </div>


        </div>
      </div >
    </>
  )
}

export default Footer