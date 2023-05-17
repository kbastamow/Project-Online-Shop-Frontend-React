import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import {FaLocationArrow} from "react-icons/fa"
import { ProductContext } from '../../context/ProductContext/ProductState'
import DateComparer from '../DateComparer/DateComparer'
import { Link } from 'react-router-dom'


const Home = () => {
    const imagePath = "http://localhost:3000/uploaded_imgs/"
    const { products, getProducts} = useContext(ProductContext)
    const [random, setRandom] = useState("")
    const [counter, setCounter] = useState(0);
    const [showComponent, setShowComponent] = useState(false);


useEffect(() => {
    if (products.length === 0) getProducts()
}, [])


//RANDOM PRODUCTS TO SHOW - setinterval doesn't work!!
useEffect(() => {
    if (counter < 10) {
      const timeoutId = setTimeout(() => {
        console.log("inside timeout")
        const randomIndex = Math.floor(Math.random() * products.length);
        setRandom(products[randomIndex]);
        setCounter(prevCounter => prevCounter + 1);
        setShowComponent(true);
      }, 10000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout on component unmount or before re-render
      };
    }
  }, [counter, products]);



  return (
    <div className="home-div d-flex justify-content-center">
        <div className="picture-div">
            <div className="background-layer row">
                <div className="col-6"></div>
                <div className="col-6 align-self-right">
                    <div className="d-flex flex-column align-items-center col-12 mt-5 mx-auto p-4">
                        <h1 className="m-4">15 years in tune with your musical needs </h1>
                        <p>Find the right tools for the music you make.</p>
                        <Link to="/products"><h5 className="p-4 show-details">See our catalogue <FaLocationArrow></FaLocationArrow></h5></Link>
                    </div>

                    <div className="bg d-flex justify-content-center mt-auto">

                        <div className="preview-div col-5 ">
                        <div >
{!random ? <></> : 
                            <div className={`fade-in-out ${showComponent ? "show" : ""}`}>
                                <div key="" className="card card-list col-12 ">
                                    <div className="w-75 bg-white mx-auto">
                                     <img src={imagePath + random.image} alt="product photo" className="img-fluid mt-2" />
                                       <DateComparer dateString={random.createdAt} />
                                    </div>
                                    <div className="">
                                        <h4 className="d-flex justify-content-center product-header card-title w-100 text-bg-dark p-2 mb-0"><span className="w-100">{random.name}</span><i className="flex-shrink-1"></i></h4>
                                    </div>
                                    <div className="neon-glow ">
                                        <div className="price-tag">{random.price}€</div>
                                    </div>
                                </div>
                            </div>
                        
                    }     
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