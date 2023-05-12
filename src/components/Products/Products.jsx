import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import CardOne from '../CardOne/CardOne'

const Products = () => {

  const {product, products, getProducts} = useContext(ProductContext)  //basically initialstate and function to change
  
  useEffect(()=> {  //when component appears, do this once
    getProducts()
  }, [])


  const productList= products.map((item) => {
    return <>
    <Card product={item}/>
    </>
  })

  const productFocus = product ? <Card product={product}/> : <p>Hello</p> //null is falsy value
  
  return (
    <>
    <SearchBar/>
    <>{(product) ? <CardOne/> : null}</>
    {/* <div className="bg-bg-5">{productFocus}</div> */}
    <div className="row">{productList}</div>
    </>
    )
}

export default Products