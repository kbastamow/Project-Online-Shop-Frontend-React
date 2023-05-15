const API_URL = "http://localhost:3000/"

import ProductReducer from "./ProductReducer"
import React, { createContext, useReducer } from 'react';
import axios from "axios";



const initialState = {
    products: [],
    product: null,
    cart: JSON.parse(localStorage.getItem("shopcart")) || [],
    favorites: JSON.parse(localStorage.getItem("shopfavorites")) || []
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
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      dispatch({
        type: "EXTRACT_ONE",
        payload: data
      })
    }

    const addFavorite = (product) => {
      console.log(product)
      dispatch({
        type: "ADD_FAVORITE",
        payload: product,
      });
    }


  const deleteFavorite = (product) => {
    dispatch({
      type: "DELETE_FAVORITE",
      payload: product,
    })
  }

  const seeFavorites = async(idArray) => {
    try {
      let request = {"id": idArray}
      console.log(request)
      const res = await axios.post(API_URL + "products/findVarious", request)
      console.log("Returning from backend: ", res.data)
      dispatch({
        type: "SEE_FAVORITES",
        payload: res.data
      })
    } catch (error) {
      console.error(error)
    } 
  }


  const clearFavorites = () => {
    dispatch({
      type: "CLEAR_FAVORITES"
    })
  }




  const addToCart = (product) => {
    const trimmed = { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }
    let newProduct = [...state.cart]  //Withoud spread, state.cart updates here too!!!!
    let found = false;
    newProduct.forEach(cartItem => {
      if (cartItem.id == trimmed.id) {
        console.log("found id")
        cartItem.quantity++
        found = true;
      }
    })
    if (!found) newProduct.push(trimmed)
    dispatch({
      type: "ADD_TO_CART",
      payload: newProduct,
    });
  };

   const changeQuantity = (product, operator) => {
    let newProduct = [...state.cart]
    newProduct.forEach(cartItem => {
      if (cartItem.id === product.id && operator === "minus" && cartItem.quantity > 1) {
        cartItem.quantity--
      } else if (cartItem.id === product.id && operator === "plus" && cartItem.quantity >= 1){
        cartItem.quantity++
      }
    })

    dispatch({
      type: "CHANGE_QUANTITY",
      payload: newProduct
    })
  }

    const removeFromCart = (product) => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product
      })
    }

    const clearCart = () => {
      dispatch ({
        type: "CLEAR_CART"
      })
    }

      return (
        <ProductContext.Provider value={{
        products:state.products,
        product:state.product,
        cart: state.cart,
        favorites: state.favorites,
        getProducts, 
        getByCategory,
        searchByName,
        createProduct,
        extractOne,
        addFavorite,
        deleteFavorite,
        seeFavorites,
        clearFavorites,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearCart
        }}>
          {children}
        </ProductContext.Provider>
      );
    };
 