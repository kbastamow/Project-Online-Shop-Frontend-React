import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import {FaPlus, FaMinus, FaTimes} from "react-icons/fa"
import { OrderContext } from '../../context/OrderContext/OrderState'

const CartModal = () => {

const {cart, changeQuantity, removeFromCart, clearCart} = useContext(ProductContext) 
const {placeOrder} = useContext(OrderContext)
  return (
    <>

<div div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={true}>
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <table className="table text-start">
  <thead>
    <tr>
      <th className="col-3">Item</th>
      <th className="col-1">Price</th>
      <th className="col-3 text-center" >Quantity</th>
      <th className="col-3">Subtotal</th>
    </tr>
  </thead>
  <tbody>
  {cart.map(product => {
            return (
            <tr key={product.id +"cartModal"}>
            <th scope="row">{product.name}</th>
            <td >{product.price}€</td>
            <td className="text-center"><span type="button" onClick={()=>changeQuantity(product, "minus")}><FaMinus/></span><span className="p-3">{product.quantity}</span> <span type="button" onClick={()=>changeQuantity(product,"plus")}><FaPlus/></span></td>
            <td className="d-flex justify-content-between"> {product.quantity * product.price}€ <span type="button" onClick={()=>(removeFromCart(product))}><FaTimes></FaTimes></span></td>
          </tr>
  )}  
          )}

</tbody>


        {/* {cart.map(product => {
            return <div key={product.id +"cartModal"} className="container-fluid">
                <div className="d-flex flex-wrap justify-content-between">
                  <div>
                  <p>{product.name}  {product.price}€</p>
                  </div>
                  <div>
                    <button type="button" onClick={()=>changeQuantity(product, "minus")}><FaMinus/></button><span className="p-3">{product.quantity}</span> <button type="button" onClick={()=>changeQuantity(product,"plus")}><FaPlus/></button>
                  </div>
                  <button><FaTimes></FaTimes></button>
                  
                </div>
                <div>Subtotal: {product.quantity * product.price}€</div>
            <hr/>
            </div> */}
        
         </table>
          <h5>Total: {cart.reduce((acc, value) => (acc + value.price * value.quantity), 0)}€</h5>
          <button type="button" className="btn btn-primary" onClick={()=> placeOrder(cart)}>Place Order</button>
          <button type="button" className="btn btn-secondary" onClick={()=> clearCart()}>Clear cart</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CartModal