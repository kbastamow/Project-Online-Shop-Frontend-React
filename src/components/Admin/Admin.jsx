import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'

const Admin = () => {
  const {categories, getCategories} = useContext(CategoryContext)
  const {product, createProduct} = useContext(ProductContext)


  console.log("Admin ", categories)

  const [checked, setChecked] = useState([]);

 useEffect(() => {
    if (categories.length == 0) getCategories() 
    console.log(categories, "inside") 
 }, [])
 

const create = (event) =>{
  event.preventDefault();
  console.log("hello")
  console.log(productname.value)
  console.log(description.value)  
  console.log(price.value)  
  console.log(image.files[0])
 
  const formData = new FormData();
  formData.append('name', productname.value);
  formData.append('description', description.value)
  formData.append('price', price.value);
  formData.append('image', image.files[0])
  checked.forEach(category => formData.append('CategoryId[]', category))
  
  console.log(formData)
  createProduct(formData)

}

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
    return(
    <>
    <div key={category.id}>
      <input type="checkbox" id={category.name} name="category" value={category.id} onChange={handleCheckbox}/>
      <label htmlFor={category.name}> {category.name} </label><br></br>
      </div>
    </>
    )
  })





  return (
    <>
    <div>Admin</div>

    <div><button type="button" className="btn btn-outline-danger">Create new product</button></div>
        <div className="d-flex col-12 col-md-8 justify-content-center mx-auto">
            
            
            <form id="post-form" encType="multipart/form-data" method="post" className="" onSubmit={create}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="productname">Name</label>
                <input type="text"  className="form-control" name="name" id="productname" required  />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea id="description" rows="4" className="form-control" name="description" required></textarea>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="">Price</label>
                <input type="number"  className="form-control" name="price" required id="price" />
              </div>


              <fieldset className="text-start">
  <div className="text-center">Category</div>
    {categoryMap}

  {/* <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label htmlFor="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label htmlFor="music">Music</label>
  </div> */}
</fieldset>




              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="image">Upload an image</label>
                <input type="file" id="image" name="image" accept="image/jpeg, image/png, image/jpg, image/gif"/>
              </div>
              <button type="submit" className="btn btn-primary btn-block col-12 mx-auto" required >Post</button>
            </form>
        </div>



    </>

  )
}

export default Admin