
import React, { useContext, useEffect, useState } from 'react'
import { FaCartArrowDown, FaHeartbeat } from "react-icons/fa";
import {BsArrowUpRightSquareFill} from "react-icons/bs"
import { ProductContext } from '../../context/ProductContext/ProductState'
import StarCalculator from '../StarCalculator/StarCalculator'
import DateComparer from '../DateComparer/DateComparer';
import "./Card.scss"

const Card = (props) => {
  let scale = "limited" //invented variable to limit what starcalculator returns
  const imagePath = "http://localhost:3000/uploaded_imgs/"
  
  const{extractOne, addToCart} = useContext(ProductContext)
  const {favorites} = useContext(ProductContext)
  const[inMyFavorites, setInMyFavorites] = useState("")

  useEffect(() => {
    setInMyFavorites(null)
    if (favorites.length > 0 ) {
      let coincides = favorites.filter(favorite => favorite.id === props.product.id)
      if (coincides.length > 0) {
      setInMyFavorites(<><FaHeartbeat></FaHeartbeat></>)
    } 
  }
  }, [favorites])

  return (
    <>
      <div key={props.product.id} className="card card-list col-5 col-md-2 mx-md-3 my-3">
        <div className="image-zoom w-75 bg-white mx-auto">
          <img src={imagePath + props.product.image} className="img-fluid mt-2" />
          
          <DateComparer dateString={props.product.createdAt} />
        
        </div>
<div className="">
  
          <h4 className="d-flex justify-content-center product-header card-title w-100 text-bg-dark p-2 mb-0"><span className="w-100">{props.product.name}</span><i className="flex-shrink-1">{inMyFavorites}</i></h4>
  
</div>
        <div className="neon-glow card-body">
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