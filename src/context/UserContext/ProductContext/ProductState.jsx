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



      

      return (
        <ProductContext.Provider value={{products: state.products, getProducts}}>
          {children}
        </ProductContext.Provider>
      );
    };
 