import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import CardOne from '../CardOne/CardOne'
import "./Product.scss"
import { useLocation } from 'react-router-dom'

const Products = () => {

  const {product, products, getProducts, cart, favorites, seeFavorites} = useContext(ProductContext)  //basically initialstate and function to change
  const location = useLocation() //TELLS US InFORMATION ABOUT THE ROUTE AND PREVIOUS PAGE if we came through navigate!
  
  useEffect(()=> {  //when component appears, do this once
    // console.log("location", location)
    if (location.state && location.state.prevPath === "/profile"){   //NOT NULL & profile-favorites-browse is the origin 
      let idArray = favorites.map(favorite => favorite.id)
      seeFavorites(idArray)
    } else {
    getProducts()
}}, [])

  useEffect(() => {
    localStorage.setItem("shopcart", JSON.stringify(cart));
  }, [cart]);

useEffect (() => {
  localStorage.setItem("shopfavorites", JSON.stringify(favorites))
}, [favorites])


  const productList= products.map((item) => {
    return <>
    <Card product={item}/>
    </>
  })

  const productFocus = product ? <Card product={product}/> : <p>Hello</p> //null is falsy value
  
  return (
    <>
    <SearchBar/>
    <div className="product-div">
    <>{(product) ? <CardOne/> : null}</>
    {/* <div className="bg-bg-5">{productFocus}</div> */}
    <div className="row h-25">{productList}</div>
    </div>
    </>
    )
}

export default Products