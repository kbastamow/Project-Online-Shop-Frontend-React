import React from 'react'
import { ProductProvider } from '../../../context/UserContext/ProductContext/ProductState'
import Products from '../../Products/Products'






const Productpage = () => {
  return (
    <div>
      <ProductProvider>
        <Products></Products>
      </ProductProvider>
    </div>
  )
}

export default Productpage