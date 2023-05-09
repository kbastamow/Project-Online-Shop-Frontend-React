import React, { useState, useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'
 
const SearchBar = () => {

  const {categories, getCategories} = useContext(CategoryContext)
  const {products, getByCategory, getAll} = useContext(ProductContext)

  useEffect(()=> {  //when component appears, do this once
    getCategories()
  }, [])

  const buttonList = categories.map(category => {
    return <>
    <li key={category.id}><button className="dropdown-item" onClick={() => getByCategory(category.id)}>{category.name}</button></li>
    </>
  })
 
  return (
    <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Search by category
            </a>
            <ul className="dropdown-menu">
              {buttonList}

              <li key="allProd"><button className="dropdown-item text-danger" onClick={() => getAll()}>All products</button></li>
            </ul>
          </li>
    
      </div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
  </nav>
  )
}

export default SearchBar