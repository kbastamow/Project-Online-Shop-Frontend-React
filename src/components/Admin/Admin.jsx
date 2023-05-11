import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Card from '../Card/Card'

const Admin = () => {
  const { categories, getCategories } = useContext(CategoryContext)
  const { product, createProduct } = useContext(ProductContext)
  const [checked, setChecked] = useState([]);
  const [preview, setPreview] = useState(<h5>Complete all fields</h5>)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [showNew, setShowNew] = useState("")

  let formData; //couldn't be put in a state

  useEffect(() => {
    setSubmitDisabled(false)
  }, [preview])

  console.log("Admin ", categories)

  useEffect(() => {
    if (categories.length == 0) getCategories()
    console.log(categories, "inside")
  }, [])



  const handleSubmit = (event) => {
    event.preventDefault();

    formData = new FormData();
    formData.append('name', productname.value);
    formData.append('description', description.value)
    formData.append('price', price.value);
    formData.append('image', image.files[0])
    checked.forEach(category => formData.append('CategoryId[]', category))

    setPreview(<>
      <p><b>Product name:</b> {productname.name}</p>
      <p><b>Description:</b> {description.value}</p>
      <p><b>Price:</b> {price.value}</p>
      <p><b>Categories</b>: {checked.join(", ")}</p>
      <div><b>Image preview:</b></div>
      <img src={URL.createObjectURL(image.files[0])} alt="" />
    </>
    )
  }



  const create = () => {
    console.log("creating new product")
    createProduct(formData)
    setPreview(<h5>Complete all fields</h5>)
    formData = ""
  }

  useEffect(() => {
    console.log("Inside useEFFECT", product)
    if (product) {
      setShowNew(<Card product={product} />)
    } else {
      setShowNew(null)
    }
  }, [product])



  const handleCheckbox = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setChecked([...checked, value]); // add the checked value to the state array
    } else {
      setChecked(checked.filter(v => v !== value)); // remove an unchecked value from the array
    }
    console.log(checked);
  }


  const categoryMap = categories.map(category => {
    return (
      <>
        <div key={category.id}>
          <input type="checkbox" id={category.name} name="category" value={category.id} onChange={handleCheckbox} />
          <label htmlFor={category.name}> {category.name} </label><br></br>
        </div>
      </>
    )
  })


  return (
    <>
      <div>Admin</div>

      <div>
        <button type="button" className="btn btn-outline-danger">Create new product</button>
        <button type="button" className="btn btn-outline-danger">Update or delete</button>
      </div>
      <div className="d-flex col-12 col-md-8 justify-content-center mx-auto">

        <form id="post-form" encType="multipart/form-data" method="post" className="" onSubmit={handleSubmit}>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="productname">Name</label>
            <input type="text" className="form-control" name="name" id="productname" required />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" rows="4" className="form-control" name="description" required></textarea>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="">Price</label>
            <input type="number" className="form-control" name="price" required id="price" />
          </div>

          <fieldset className="text-start">
            <div className="text-center">Category</div>

            {categoryMap}

          </fieldset>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="image">Upload an image</label>
            <input type="file" id="image" name="image" accept="image/jpeg, image/png, image/jpg, image/gif" required />
          </div>

          <button type="submit" className="btn btn-primary btn-block col-12 mx-auto" data-bs-toggle="modal" data-bs-target="#previewModal" onClick={handleSubmit}>Preview product</button>
          {/* 
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#previewModal">Extra button</button> */}

          <div className="modal fade" id="previewModal" tabIndex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Review the product:</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                  {preview}

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Go back</button>
                  <button type="button" className="btn btn-primary" onClick={create} disabled={submitDisabled}>Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        {showNew}
      </div>
    </>

  )
}

export default Admin