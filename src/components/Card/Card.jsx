
import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import {BsArrowUpRightSquareFill} from "react-icons/bs"
import guitarPic from "../../assets/guitarproduct.jpg"
import StarCalculator from '../StarCalculator/StarCalculator'
import { ProductContext } from '../../context/ProductContext/ProductState'
import "./Card.scss"

const Card = (props) => {
  let scale = "limited" //invented variable to limit what starcalculator returns

  const{extractOne, addToCart} = useContext(ProductContext)

  const imagePath = "http://localhost:3000/uploaded_imgs/"
  // const enlarge =() =>{
  //   console.log("hello from card")
  // }

  return (
    <>
        <div key={props.product.id} className="card card-list col-5 col-md-2 mx-md-3 my-3">
        {/* card border-3 border-black mx-auto   col-9 col-md-2 text-center rounded-0 */}

                 <div className="image-zoom w-75 bg-white mx-auto">
                  <img src={imagePath + props.product.image}
                  className="img-fluid mt-2"/>
                </div>
                <h4 className="card-title w-100  bg-black text-bg-dark p-2 mb-0">{props.product.name}</h4>
                <div className="card-body bg-white text-bg-light">
                  <h5 className="mb-3">{props.product.price}€</h5>

                    <p className="mt-2 show-details"  onClick={() => extractOne(props.product)}>Details<span className="ms-2"><BsArrowUpRightSquareFill/></span></p>
    
                    <button className="click-effect" onClick={()=>addToCart(props.product)}><i><FaCartArrowDown/></i></button>
                  
                    {/* <p className="mb-0">Rating:</p> */}
                    {/* CreateProduct doesn't return reviews, so set a default value */}
                    {<StarCalculator reviews={props.product.Reviews || []} productId={props.product.id} scale={scale}/>}

                </div>
              </div>

    </>
  )
}

export default Card