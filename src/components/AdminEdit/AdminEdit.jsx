import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import FormProduct from '../FormProduct/FormProduct';





const AdminEdit = () => {
  const { categories, getCategories} = useContext(CategoryContext)
  const { product, products, getProducts, extractOne } = useContext(ProductContext)

  const [editForm, setEditForm] = useState(null)
  

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);





  useEffect(() => {
    if (categories.length === 0) getCategories()
    if (products.length === 0) getProducts()
  }, [])



  console.log(products)
  console.log(categories)

  // useEffect(() => {
  //   setEditForm(<FormProduct></FormProduct>)
  //   console.log(product)
  // }, [product])


if (products.length === 0 || (categories.length === 0)) {
  return <>Wait...</>
}


return (
    <div>
      <button><Link to={"/admin"}>Go back</Link></button>
      <div>Modify product</div>
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
              <td><button onClick={() => extractOne(product)}>Edit</button></td>
      
              </tr>
      
              )})}
            </tbody>
        </table>
          </div>




{/* MODAL*/}


<Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!

        <form id="edit-form" encType="multipart/form-data" method="post" className="" onSubmit="">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="productname">Name</label>
              <input type="text" className="form-control" name="name" id="productname" required  />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea id="description" rows="4" className="form-control" name="description" required ></textarea>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="">Price</label>
              <input type="number" className="form-control" name="price" required id="price"  />
            </div>
            <fieldset className="text-start">
              <div className="text-center">Category</div>
              {/* {categoryMap} */}
            </fieldset>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="image">Upload an image</label>
              <input type="file" id="image" name="image" accept="image/jpeg, image/png, image/jpg, image/gif" required />
            </div>
            {/* FORM FINISH, MODAL BUTTON AND MODAL */}


            {/*  */}
          </form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


















        
    </div>





        
    
   
  )
}

export default AdminEdit