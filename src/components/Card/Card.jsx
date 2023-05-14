
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import {BsArrowUpRightSquareFill} from "react-icons/bs"
import guitarPic from "../../assets/guitarproduct.jpg"
import StarCalculator from '../StarCalculator/StarCalculator'
import { ProductContext } from '../../context/ProductContext/ProductState'
import "./Card.scss"
import DateComparer from '../DateComparer/DateComparer';

const Card = (props) => {
  let scale = "limited" //invented variable to limit what starcalculator returns

  const{extractOne, addToCart} = useContext(ProductContext)
  const imagePath = "http://localhost:3000/uploaded_imgs/"


  return (
    <>
      <div key={props.product.id} className="card card-list col-5 col-md-2 mx-md-3 my-3">
        <div className="image-zoom w-75 bg-white mx-auto">
          <img src={imagePath + props.product.image} className="img-fluid mt-2" />
          
          <DateComparer dateString={props.product.createdAt} />
        
        </div>
        <h4 className=" card-title w-100  bg-black text-bg-dark p-2 mb-0">{props.product.name}</h4>
        <div className="test card-body">
          <h5 className="mb-3">{props.product.price}€</h5>

          <p className="mt-2 show-details" onClick={() => extractOne(props.product)}>Details<span className="ms-2"><BsArrowUpRightSquareFill /></span></p>

          <span className="click-effect cart-icon" onClick={() => addToCart(props.product)}><i><FaCartArrowDown /></i></span>

          {<StarCalculator reviews={props.product.Reviews || []} productId={props.product.id} scale={scale} />}

        </div>
      </div>

    </>
  )
}

export default Card