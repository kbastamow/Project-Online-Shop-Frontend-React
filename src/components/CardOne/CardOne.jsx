import React, { useContext } from 'react'
import "./CardOne.scss"
import testpic from "../../assets/guitarproduct.jpg"
import { ProductContext } from '../../context/ProductContext/ProductState'
import StarCalculator from '../StarCalculator/StarCalculator'



const CardOne = () => {

const {product} = useContext(ProductContext)
console.log(product)




return (<>
  <div className="topContainer">
{/* <div className="container-fluid"> */}
  {/* <div className="row"> */}
  
<div className="card flex-row oneCard ">

  <div className="imgDiv col-7 col-md-4">
  <img className="card-img-left img-fluid" src={testpic}/>
  </div>
  <div className="card-body col-7 col-md-5 d-flex flex-column">
  <span className="badge bg-danger ms-auto">New</span>
    <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><span className="price">{product.price}€</span></p>
           <div className="d-flex flex-wrap">
          <button type="button" className="filled">Add to cart</button>
          <button type="button" className="outline ms-3">Add to favorites</button><br/>
          </div>
          <div className="my-2"> {<StarCalculator reviews={product.Reviews || []} productId={product.id}/>}</div>
  </div>
</div>







    {/* <div className="h-100 d-flex flex-wrap position-relative justify-content-center" >
      <div className="imgDiv">
      <img src={testpic} alt=""/>
      </div >
          <div className="bg bg-danger h-75 col-4 text-start ps-5">
          <h1>name</h1>
          <p>description</p>
          <p className="price">544€</p>
          <button>Add to cart</button>
          <button>Add to favorites</button>
        </div>
    </div> */}
{/* </div> */}
{/* </div> */}
</div>
    </>
  )
}

export default CardOne