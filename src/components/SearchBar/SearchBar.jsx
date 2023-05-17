import React, { useState, useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'
import {FaSearch} from "react-icons/fa"
import "./SearchBar.scss"


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [resultMsg, setResultMsg] = useState("")

  const {categories, getCategories} = useContext(CategoryContext)
  const {products, getByCategory, getProducts, searchByName, clearProduct, orderResults} = useContext(ProductContext)

  useEffect(()=> {  //when component appears, do this once
    getCategories()
  }, [])

  const buttonList = categories.map((category, i) => {
    return <>
    <div key={i}>
    <li><button className="dropdown-item" onClick={() => {return clearProduct(), getByCategory(category.id), setResultMsg(`Showing results for ${category.name}`)}}>{category.name}</button></li>
    </div>
    </>
  })

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(search)
    searchByName(search)
    setResultMsg(`Showing results for "${search}"`)
    setSearch("")
    clearProduct()  //Clears the existing product focus
  }
 
  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="d-flex w-100 justify-content-between px-5">
          <div className="navbar-nav mb-2 ">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Search by category
              </a>
              <ul className="dropdown-menu">
                {buttonList}

              </ul>
            </li>
                      
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Order results:
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => {orderResults("price"), clearProduct(product)}}>Price</button></li>
                <li><button type="button" className="dropdown-item" onClick={() => {orderResults("alphabet"), clearProduct(product)}}>A-Z</button></li>
                <li><button type="button" className="dropdown-item" onClick={() => {orderResults("date"), clearProduct(product)}}>Date</button></li>
              </ul>
            </div>
            <div key="allProd" className="ms-2 show-details" onClick={() => { return getProducts(), setResultMsg(""), clearProduct(product)}}><span className="nav-link">All products</span></div>
            </div>
            
         

          <div>
            <form className="ms-auto" role="search" onSubmit={handleSearch}>
              <div className="input-group-form-group d-flex flex-nowrap">
                <input className="form-control search-input " type="search" placeholder="Search" aria-label="Search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="search-btn input-group-text" type="submit"><i><FaSearch /></i></button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div className="mb-4">{resultMsg}</div>

    </>
  )
}

export default SearchBar