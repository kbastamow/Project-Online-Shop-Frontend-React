const API_URL = "http://localhost:3000/"

import ProductReducer from "./ProductReducer"
import React, { createContext, useReducer } from 'react';
import axios from "axios";


const initialState = {
    products: []
  }
  
export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState); //Two parameters

    const getProducts = async () => {
        try {
            const res = await axios.get(API_URL + "products/getAllWithAssociations");
            console.log(res.data)
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
          console.log(res.data, "We searched axios")
          dispatch({
            type:"SEARCH_BY_NAME",
            payload: res.data
          });
        } catch (error) {  
          console.error(error)
        }    
    }
      
      return (
        <ProductContext.Provider value={{
        products: state.products, 
        getProducts, 
        getByCategory,
        searchByName}}>
          {children}
        </ProductContext.Provider>
      );
    };
 