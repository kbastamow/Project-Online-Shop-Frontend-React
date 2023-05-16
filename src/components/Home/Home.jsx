import React, { useContext, useEffect } from 'react'
import "./Home.scss"
import testpic from "../../assets/guitarproduct.jpg"
import {FaLocationArrow} from "react-icons/fa"
import { ProductContext } from '../../context/ProductContext/ProductState'
import DateComparer from '../DateComparer/DateComparer'


const Home = () => {
    const imagePath = "http://localhost:3000/uploaded_imgs/"
    const { product, products, getProducts, extractOne } = useContext(ProductContext)

useEffect(() => {
    if (products.length === 0) getProducts()
}, [])

useEffect(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    console.log("getting one")
    extractOne(products[randomIndex])
}, [products])




    // <div key="" className="card card-list col-5 col-md-2 mx-md-3 my-3">
    //     <div className="w-75 bg-white mx-auto">
    //         <img src={testpic}
    //             className="img-fluid mt-2" />

    //         <DateComparer dateString={props.product.createdAt} />

    //     </div>
    //     <div className="">

    //         <h4 className="d-flex justify-content-center product-header card-title w-100 text-bg-dark p-2 mb-0"><span className="w-100">Electric guitar</span><i className="flex-shrink-1"></i></h4>

    //     </div>
    // </div>    









    return (
    <div className="home-div d-flex justify-content-center my-5">
        <div className="picture-div">
            <div className="background-layer row">
                <div className="col-6"></div>
                <div className="col-6 align-self-right">
                    <div className="d-flex flex-column align-items-center col-10 mt-5 mx-auto p-4">
                    <h1 className="m-4">15 years in tune with all your musical needs </h1>
                    <h5 className="p-4 show-details">See our catalogue <FaLocationArrow></FaLocationArrow></h5>
                    </div>
                    
                    <div className="bg d-flex justify-content-center mt-auto">
                    
                    <div className="preview-div col-5 ">



    <div key="" className="card card-list col-12">
        <div className="w-75 bg-white mx-auto">
        
            {product == null ? <img src={testpic} alt="product photo" className="img-fluid mt-2" /> : <img src={imagePath + product.image} alt="product photo" className="img-fluid mt-2" />}
           
    
            {product == null ? <></> : <DateComparer dateString={product.createdAt} />}

        </div>
        <div className="">

            <h4 className="d-flex justify-content-center product-header card-title w-100 text-bg-dark p-2 mb-0"><span className="w-100">{product == null ? <>Electric guitar</> : <>{product.name}</>}</span><i className="flex-shrink-1"></i></h4>
           
        </div>
        
        
        <div className="neon-glow ">
        <div className="price-tag">{product == null ? <>Check latest prices</> : <>{product.price}€</>}</div>
                        
                             
                         </div>
    </div>    

                         
                         
                         </div>
                </div>
                </div>

                
            </div>
        
        
            
        
        
            </div>
    </div>
  )
}

export default Home