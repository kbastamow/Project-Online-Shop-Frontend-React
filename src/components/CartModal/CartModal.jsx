import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

const CartModal = () => {

const {cart} = useContext(ProductContext) 


    
  return (
    <>

<div div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        {cart.map(product => {
            return <div key={product.id}>
                <div>{product.name}</div>
                <div>{product.price}€</div>
                <div><button>-</button> quantity <button>+</button></div>
            </div>
        }  
            )}





        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CartModal