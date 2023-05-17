import React, { useContext, useEffect } from 'react'

import CartModal from '../CartModal/CartModal';
import { OrderContext } from '../../context/OrderContext/OrderState';
import { ProductContext } from '../../context/ProductContext/ProductState';

const User = () => {

const {orderSuccess} = useContext(OrderContext);
const {clearCart} = useContext(ProductContext)

useEffect(()=>{
    if (orderSuccess) clearCart()
}, [orderSuccess])

  return (
    <>
    <CartModal></CartModal>
    </>
  )
}

export default User