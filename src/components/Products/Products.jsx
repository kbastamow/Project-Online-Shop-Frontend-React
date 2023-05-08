import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/UserContext/ProductContext/ProductState'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'

const Products = () => {

  const {products, getProducts} = useContext(ProductContext)  //basically initialstate and function to change
  
  useEffect(()=> {  //when component appears, do this once
    getProducts()
  }, [])


  const product = products.map((product) => {
    return <>
    <Card product={product}/>
    {/* return <div key={product.id}>{product.name}</div> */}

    </>
  })
  
  return (
    <>
    {<SearchBar/>}
    <div className="row bg bg-black">{product}</div>
    </>
    )
}

export default Products