import React from 'react'
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import guitarPic from "../../assets/guitarproduct.jpg"


const Card = () => {
  return (
    <div>
        <div className="card bg-dark border-3 border-white mx-auto mx-md-3 my-3 col-7 col-md-2 text-center rounded-0">
                <h4 className="card-title mw-100 pb-3 bg-dark text-bg-dark p-2">Electric guitar</h4>
                <div className="image-zoom w-100 bg-white">
                  <img src={guitarPic}
                  className="img-fluid"/>
                </div>
                <div className="card-body">
                  <h5 className="mb-3">$61.99</h5>
                   
                    <p id="show-details" className="mt-2" data-bs-toggle="collapse" data-bs-target="#details">Show Details</p>
                    <p id="details" className="collapse">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque asperiores alias nobis similique ipsum, veniam ullam. Expedita laborum non velit nam illo nobis quibusdam quia, natus ratione sapiente illum cupiditate?</p>
                    <p className="mb-0">Rating:</p>
                    {/* <i className="fa-solid fa-star" style="color: #e33517;"></i>
                    <i className="fa-solid fa-star" style="color: #e33517;"></i>
                    <i className="fa-solid fa-star" style="color: #e33517;"></i>
                    <i className="fa-solid fa-star" style="color:#e33517;"></i>
                    <i className="fa-solid fa-star" style="color: #e33517;"></i> */}

                    <p className="read-more mt-2" data-bs-toggle="collapse" data-bs-target="#review-example">Read more</p>
                  
                    <button id="buy-btn" className="btn btn-outline-light">Add to cart</button> 
                    <div id="review-example" className="collapse text-center text-bg-dark mt-2 pt-1">
                        <i className="fa-solid fa-star" style="color: #e33517;"></i>
                         <i className="fa-solid fa-star" style="color: #e33517;"></i>
                         <i className="fa-solid fa-star" style="color: #ffff00;"></i>
                         <i className="fa-regular fa-star-half-stroke" style="color: #ffff00;"></i>
                         <i className="fa-regular fa-star" style="color: #ffff00;"></i>
                         <p>A really good quality for a reasonable price</p>
                         <hr/>
                    </div>
                    
                </div>
              </div>



        




    </div>
  )
}

export default Card