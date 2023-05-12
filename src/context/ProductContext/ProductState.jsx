const API_URL = "http://localhost:3000/"

import ProductReducer from "./ProductReducer"
import React, { createContext, useReducer } from 'react';
import axios from "axios";

let cart = JSON.parse(localStorage.getItem("shopcart")) || []

const initialState = {
    products: [],
    product: null,
    cart: cart
  }
  
export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState); //Two parameters

    const getProducts = async () => {
        try {
            const res = await axios.get(API_URL + "products/getAllWithAssociations");
            dispatch({
              type: "GET_PRODUCTS",
              payload: res.data,
            });   
        } catch (error) {
            console.error(error)
        }
      };

    const getByCategory = async(categoryId) => {
      try {
        const res = await axios.get(API_URL + "categories/findById/" + categoryId);
          dispatch({
            type: "GET_BY_CATEGORY",
            payload: res.data.Products
          });
        } catch(error) {
            console.error(error)    
        }
      }

      const searchByName = async(input) => {
        try {
          console.log(input)
          const res = await axios.get(API_URL + "products/findByName/" + input)
          dispatch({
            type:"SEARCH_BY_NAME",
            payload: res.data
          });
        } catch (error) {  
          console.error(error)
        }    
    }

    const createProduct = async(formdata) => {
      let token = JSON.parse(localStorage.getItem("shoptoken"))
      try {
        const res = await axios.post(API_URL + "products/createProduct", formdata, {
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(res.data.product)
        dispatch({
          type: "CREATE_PRODUCT",
          payload: res.data.product,
        })
      }catch(error) {
        console.error(error)
      }
    }

    const extractOne = (data) => {
      console.log(data);
      dispatch({
        type: "EXTRACT_ONE",
        payload: data
      })
    }

    const addToCart = (product) => {
      let trimmed =  {id:product.id, name: product.name, price: product.price, image: product.image}
      console.log(product)
      dispatch ({
        type: "ADD_TO_CART",
        payload: trimmed
      })

    }

      
      return (
        <ProductContext.Provider value={{
        products:state.products,
        product:state.product,
        cart: state.cart,
        getProducts, 
        getByCategory,
        searchByName,
        createProduct,
        extractOne,
        addToCart
        }}>
          {children}
        </ProductContext.Provider>
      );
    };
 