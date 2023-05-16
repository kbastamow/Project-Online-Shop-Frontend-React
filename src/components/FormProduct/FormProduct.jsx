import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '../../context/CategoryContext/CategoryState'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'


const FormProduct = () => {


    const { categories, getCategories, createCategory } = useContext(CategoryContext)
    const { product, getProducts, createProduct, products, extractOne } = useContext(ProductContext)
    const [preview, setPreview] = useState(<h5>Complete all fields</h5>)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [showNew, setShowNew] = useState("")
    const [name, setName] = useState("");


   const [formInput, setFormInput] = useState({
    name: "",
    description:  "",
    price: "",
    image: {},
    category: []
  })

  useEffect(() => {
    console.log("product changed")

    if(product) {
    setFormInput((prevFormInput) => {
    return {
      ...prevFormInput,
      "name": product.name,
      "description": product.description,
      "price": product.price,
    };
  });
}
}, [product])
    
   
      const handleInput = (event) => {
        let target = event.target;
        if (target.type === "checkbox") {
          if (target.value && (!formInput.category.includes(target.name))) {  //Add trues if they don't exist yet
            setFormInput({ ...formInput, category: [...formInput.category, target.name] })
    
          } else { //If checkbox is false, remove from array if it was added earlier
            console.log("false")
            console.log(target.name)
            let falseRemoved = formInput.category.filter(item => item !== target.name)
            setFormInput({ ...formInput, category: falseRemoved }); // remove an unchecked value from the array
          }
    
        }
        if (target.type === "file") {
          setFormInput({ ...formInput, image: target.files[0] })
          console.log(formInput.image)
        }
        if (target.type === "text" || target.type === "number" || target.type === "textarea") {
          setFormInput({ ...formInput, [target.name]: target.value })
        }
      } 
      
     
      const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', formInput.name)
        formData.append('description', formInput.description)
        formData.append('price', formInput.price);
        formData.append('image', formInput.image)
        formInput.category.forEach(id => formData.append('CategoryId[]', id))
    
        console.log(formData)
        console.log("WHAT THE F..")
        console.log("this is event-target ", event.target)
        createProduct(formData)
        event.target.reset()
    
        setFormInput({
          "name": props.product.name,
          "description": "",
          "price": "",
          "image": {},
          "category": []
        })
      }
    


//HEEEEEEEEEEEEEREEEEEEEEEEEEEEEEEEEEEE
if (!product || (categories.length === 0)) {
  console.log("product:", product)
  return <>Waiting...</>
}     

const categoryMap = categories.map(category => {
        let productCategories = product.Categories.map(cat => cat.name)
        if (productCategories.includes[category.name]){
        console.log(true)
        }
        return (
          <>
            <div key={category.id}>
              <input type="checkbox" 
              id={category.name} 
              name={category.id} 
              onChange={handleInput} 
              checked = {product.Categories.map(category => category.name).includes(category.name)}
              />
              <label htmlFor={category.name}> {category.name} </label><br></br>
            </div>
          </>
        )
      })    
    
        
  const previewProduct = () => {
        // Check for empty values
        let hasEmptyValues = false;
    
        for (const key in formInput) {
          if (!formInput[key] && formInput[key] !== 0) {
            console.log(formInput[key])
            hasEmptyValues = true;
            setPreview(<h5>Complete all fields</h5>)
            setBtnDisabled(true)
            return;
          }
        }


        //Get the categories names from CategoryContext
        let categoryNames = formInput.category.map(id => {
          const extractedName = categories.find(cat => cat.id == id);
          return extractedName ? extractedName.name : null;
        });
    
        setBtnDisabled(false)
        setPreview(<>
          <p><b>Product name:</b> {formInput.name}</p>
          <p><b>Description:</b> {formInput.description}</p>
          <p><b>Price: </b> {formInput.price} €</p>
          <p><b>Categories</b>: {categoryNames.join(", ")}</p>
          <div><b>Image preview:</b></div>
          <img src={URL.createObjectURL(formInput.image)} alt="" />
        </>
        )
      }
      



  if (!product || (categories.length === 0)) {
    console.log("product:", product)
    return <>Waiting...</>
  } 

  return (

    

    <div className="d-flex col-12 col-md-8 justify-content-center mx-auto">
        <div className="bg bg-warning">
          <h4>New product</h4>
          <form id="post-form" encType="multipart/form-data" method="post" className={""} onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="productname">Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  id="productname" 
                  required 
                  onChange={(event) => setFormInput({...formInput, name: event.target.value})}
                  value = {formInput.name || ""} 



                  
                  
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="description">Description</label>
                  <textarea 
                  id="description" 
                  rows="4" 
                  className="form-control" 
                  name="description" 
                  required 
                //   onChange={handleInput}
                  onChange={(event) => setFormInput({...formInput, "description": event.target.value})}
                  value = {formInput.description || ""}

                  
                  ></textarea>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="">Price</label>
                  <input 
                  type="number" 
                  className="form-control" 
                  name="price" 
                  required id="price" 
                  onChange={(event) => setFormInput({...formInput, "price": event.target.value})}
                  value = {formInput.price || ""}
                  
                  
                  />
                </div>
                <fieldset className="text-start">
                  <div className="text-center">Category</div>
                  <div>This product is currently found in categories</div>

                  {categoryMap}

                </fieldset>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="image">Upload an image</label>
                  <input type="file" id="image" name="image" accept="image/jpeg, image/png, image/jpg, image/gif" required onChange={handleInput} />
                </div>
                {/* FORM FINISH, MODAL BUTTON AND MODAL */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#previewModal" onClick={previewProduct}>Preview</button>
                <div className="modal fade" id="previewModal" tabIndex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-center">Review the product:</h5>
                      </div>
                      <div className="modal-body">
                        {preview}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setPreview(<h5>Complete all fields</h5>)}>Go back</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" disabled={btnDisabled}>Confirm</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
        </div>
    
    





</div>
  )
}

export default FormProduct