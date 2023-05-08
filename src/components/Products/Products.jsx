import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/UserContext/ProductContext/ProductState'

const Products = () => {

  const {products, getProducts} = useContext(ProductContext)  //basically initialstate and function to change
  
  useEffect(()=> {  //when component appears, do this once
    getProducts()
  }, [])

  const product = products.map((product) => {
    return <div key={product.id}>{product.name}</div>
  })
  
  return (
    <div>{product}</div>
  )
}

export default Products