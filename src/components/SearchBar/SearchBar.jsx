import React, { useState, useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'
 
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [resultMsg, setResultMsg] = useState("")

  const {categories, getCategories} = useContext(CategoryContext)
  const {products, getByCategory, getProducts, searchByName} = useContext(ProductContext)

  useEffect(()=> {  //when component appears, do this once
    getCategories()
  }, [])

  const buttonList = categories.map(category => {
    return <>
    <li key={category.name}><button className="dropdown-item" onClick={() => {return getByCategory(category.id), setResultMsg(`Showing results for ${category.name}`)}}>{category.name}</button></li>
    </>
  })

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(search)
    searchByName(search)
    setResultMsg(`Showing results for "${search}"`)
    setSearch("")
  }
 
  return (
    <>
    <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Search by category
            </a>
            <ul className="dropdown-menu">
              {buttonList}

              <li key="allProd"><button className="dropdown-item text-danger" onClick={() => {return getProducts(), setResultMsg("")}}>All products</button></li>
            </ul>
          </li>
    
      </div>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
  </nav>
  <div>{resultMsg}</div>

  </>
  )
}

export default SearchBar