import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import {FaPlus, FaMinus, FaTimes, FaTrash} from "react-icons/fa"
import { OrderContext } from '../../context/OrderContext/OrderState'
import logosm from "../../assets/logosmall2.png"



const CartModal = () => {

const {cart, changeQuantity, removeFromCart, clearCart} = useContext(ProductContext)
const {placeOrder} = useContext(OrderContext)


  const cartContents = <>
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
            <tr key={product.id + "cartModal"}>
              <th scope="row">{product.name}</th>
              <td >{product.price}€</td>
              <td className="text-center"><span type="button" onClick={() => changeQuantity(product, "minus")}><FaMinus /></span><span className="p-3">{product.quantity}</span> <span type="button" onClick={() => changeQuantity(product, "plus")}><FaPlus /></span></td>
              <td className="d-flex justify-content-between"> {(product.quantity * product.price).toFixed(2)}€ <span type="button" onClick={() => (removeFromCart(product))}><FaTimes></FaTimes></span></td>
            </tr>
          )
        }
        )}

<tr key={"empty-row"}>
              <th scope="row"></th>
              <td ></td>
              <td ></td>
              <td className="d-flex justify-content-end"><button type="button" className="text-button " onClick={() => clearCart()}>Clear cart<i className="ms-1"><FaTrash></FaTrash></i></button></td>
      
              </tr>

      </tbody>
    </table>
    <h5>Total: {cart.reduce((acc, value) => (acc + value.price * value.quantity), 0)}€</h5>
    <button type="button" className="dark-button-blue click-effect mb-2 px-5 py-1 w-25" onClick={() => placeOrder(cart)}>Place Order</button><br/>
    

  </>




return (
    <>

<div div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={true}>
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <img src={logosm} alt="logo" className="modal-title"></img>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      {/* Render depending on state: */}
    {(cart.length === 0) ? <h4>Your cart is empty</h4> : cartContents}
  

      </div>
      <div className="modal-footer d-flex justify-content-end">
        <button type="button" className="outline-dark py-1 px-2" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CartModal