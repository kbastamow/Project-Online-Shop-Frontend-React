import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import CardOne from '../CardOne/CardOne'
import "./Product.scss"
import { useLocation } from 'react-router-dom'

const Products = () => {

  const {product, products, getProducts, cart, favorites, seeFavorites, clearProduct} = useContext(ProductContext)  //basically initialstate and function to change
  const location = useLocation() //TELLS US InFORMATION ABOUT THE ROUTE AND PREVIOUS PAGE if we came through navigate!
  

 useEffect(() => {
  if (products.length < 1) getProducts()
  }, []) 

  useEffect(()=> {  
    if (location.state && location.state.prevPath === "/profile"){   //NOT NULL & profile-favorites-browse is the origin 
      let idArray = favorites.map(favorite => favorite.id)
      seeFavorites(idArray)
    } 
}, [])


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

  return (
    <>
    <SearchBar/>
    <div className="product-div">
    <>{(product) ? <CardOne/> : null}</>

    <div className="row h-25">{productList}</div>
    </div>
    </>
    )
}

export default Products