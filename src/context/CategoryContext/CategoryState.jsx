import { createContext, useReducer } from "react"
import CategoryReducer from "./CategoryReducer"
const API_URL = "http://localhost:3000/"
import axios from "axios"


const initialState = {
    categories: [],

}

export const CategoryContext = createContext(initialState)

export const CategoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState)

    const getCategories = async () => {
        try {
            const res = await axios.get(API_URL + "categories/getAll");
              console.log(res.data)
            dispatch({
                type: "GET_CATEGORIES",
                payload: res.data
              })
            } catch(error) {
                console.error(error)
                
              }
    }

    const createCategory = async(data) => {
        try {
          const token = JSON.parse(localStorage.getItem("shoptoken"))
          const res = await axios.post(API_URL + "categories/createCategory", data, {
            headers: {
                "Authorization": token
            }
          }) 
          console.log(res.data) 
          dispatch ({
            type: "CREATE_CATEGORY",
            payload: res.data
          })
        } catch (error) {
            console.error(error)
            
        }
    }

    return (<CategoryContext.Provider value={{
        categories: state.categories,
        getCategories,
        createCategory
    }}>
        {children}
    </CategoryContext.Provider>

    )

}