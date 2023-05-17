import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import {FaPlus, FaMinus, FaTimes, FaTrash} from "react-icons/fa"
import { OrderContext } from '../../context/OrderContext/OrderState'
import logosm from "../../assets/logosmall2.png"
import {Modal} from "react-bootstrap"
import { ModalContext } from '../../context/ModalContext/ModalState'


const CartModal = () => {

  const { cart, changeQuantity, removeFromCart, clearCart } = useContext(ProductContext)
  const { placeOrder, orderSuccess } = useContext(OrderContext)
  const { cartModal, closeCart } = useContext(ModalContext)


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

    <div className="d-flex flex-column align-items-center">
      <h5>Total: {(cart.reduce((acc, value) => (acc + value.price * value.quantity), 0)).toFixed(2)}€</h5>
      <button type="button" className="dark-button-blue click-effect mb-2 px-5 py-1 w-25" onClick={() => placeOrder(cart)}>Place Order</button><br />
    </div>

  </>


return (
    <>
  <Modal 
        show={cartModal}
        backdrop="true"
        keyboard={false}
        onHide={closeCart}
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        >

    <div className="modal-content">
    <Modal.Header>
        <img src={logosm} alt="logo" className="modal-title"></img>
        <button type="button" className="btn-close" onClick={closeCart} aria-label="Close"></button>
        </Modal.Header> 
    <Modal.Body>

      {orderSuccess.length > 1}

      {/* Render depending on state: */}
    {(cart.length === 0) ? <h4 className="text-center">Your cart is empty</h4> : cartContents}
  

    </Modal.Body>
    <Modal.Footer>
      <div className="d-flex justify-content-end">
        <button type="button" className="outline-dark py-1 px-2" onClick={closeCart}>Close</button>
      </div>
      {/* </div> */}
    </Modal.Footer>
    </div>


</Modal>
    </>
  )
}

export default CartModal