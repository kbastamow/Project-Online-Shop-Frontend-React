
import React, { useContext } from 'react'
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import guitarPic from "../../assets/guitarproduct.jpg"
import StarCalculator from '../StarCalculator/StarCalculator'
import { ProductContext } from '../../context/ProductContext/ProductState'


const Card = (props) => {
  const{extractOne} = useContext(ProductContext)
  
  const imagePath = "http://localhost:3000/uploaded_imgs/"
  const enlarge =() =>{
    console.log("hello from card")
  }

  return (
    <>
        <div key={props.product.id} className="card card bg-dark border-3 border-white mx-auto mx-md-3 my-3 col-9 col-md-2 text-center rounded-0">
                <h4 className="card-title w-100  bg-black text-bg-dark p-2 mb-0">{props.product.name}</h4>
                <div className="image-zoom w-100 bg-white">
                  <img src={imagePath + props.product.image}
                  className="img-fluid"/>
                </div>
                <div className="card-body bg-white text-bg-light">
                  <h5 className="mb-3">{props.product.price}</h5>

                    <p id="show-details" className="mt-2" data-bs-toggle="collapse" data-bs-target={`#${props.product.id}`}>Show Details</p>
                    <p id={props.product.id} className="collapse">{props.product.description}</p>
                    <button id="buy-btn" className="btn btn-outline-dark" onClick={() => extractOne(props.product)}>Details</button>
                    <button id="buy-btn" className="btn btn-outline-success">Add to cart</button>
                 
                    <p className="mb-0">Rating:</p>
                    {/* CreateProduct doesn't return reviews, so set a default value */}
                    {<StarCalculator reviews={props.product.Reviews || []} productId={props.product.id}/>}
                   
                </div>
              </div>
    </>
  )
}

export default Card