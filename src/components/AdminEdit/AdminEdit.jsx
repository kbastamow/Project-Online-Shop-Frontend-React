import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { Link } from 'react-router-dom'
import FormProduct from '../FormProduct/FormProduct';

const AdminEdit = () => {
  const { categories, getCategories} = useContext(CategoryContext)
  const { product, products, getProducts, extractOne } = useContext(ProductContext)
  
  
 
  useEffect(() => {
    if (categories.length === 0) getCategories()
    if (products.length === 0) getProducts()
  }, []) 
if (products.length === 0 || (categories.length === 0)) {
  return <></>
}

return (
    <div>
      <Link to={"/admin"}><button className="dark-button-blue my-2 px-3">Go back</button></Link>
      
        {/*UPDATE PRODUCT HERE*/}

        {/* {editForm} */}
        <FormProduct></FormProduct>
    
          <div className="table-responsive mx-5">
            <table className="table text-start">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Categories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product =>{
              return (
              <tr key={product.id}>
              <td className="">{product.name}</td>
              <td className="">{product.price}</td>
              <td className="" >{product.description}</td>
              <th className=""><img className="img-thumbnail" src={`http://localhost:3000/uploaded_imgs/${product.image}`}alt="productpicture"/></th>
              <td>{product.Categories.map(category => <div key={category.name}>{category.name}</div>) }</td>
              <td><button type="button" className="outline-dark" onClick={() => extractOne(product)}>Edit</button></td>
              </tr>
              )})}
            </tbody>
        </table>
          </div>      
    </div>
  )
}

export default AdminEdit