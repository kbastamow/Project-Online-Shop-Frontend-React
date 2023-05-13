import React, { useContext } from 'react'
import "./CardOne.scss"
import { ProductContext } from '../../context/ProductContext/ProductState'
import StarCalculator from '../StarCalculator/StarCalculator'



const CardOne = () => {

const {product, addToCart, addFavorite, favorites} = useContext(ProductContext)
const imagePath = "http://localhost:3000/uploaded_imgs/"

  return (<>
    <div className="topContainer">
      <div className="card flex-row oneCard">

        <div className="imgDiv col-7 col-md-4">
          <img className="card-img-left img-fluid" src={imagePath + product.image} />
        </div>
        <div className="card-body col-7 col-md-5 d-flex flex-column">
          <span className="badge bg-danger ms-auto">New</span>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><span className="price">{product.price}€</span></p>
          <div className="">
            <button type="button" className="filled click-effect my-1" onClick={() => addToCart(product)}>Add to cart</button>

            {(favorites.includes(product)) ?
              <>
                <div className="secondary-emphasized">In your favorites</div>
              </>
              :
              <>
                <button type="button" className="outline click-effect my-1 ms-4" onClick={() => addFavorite(product)}>Add to favorites</button>
              </>
            }
          </div>
          <div className="my-2"> {<StarCalculator reviews={product.Reviews || []} productId={product.id} />}</div>
        </div>
      </div>

    </div>
  </>
  )
}

export default CardOne