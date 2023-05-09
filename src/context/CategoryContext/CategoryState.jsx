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
            console.log(res.data);
              dispatch({
                type: "GET_CATEGORIES",
                payload: res.data
              })
            } catch(error) {
                console.error(error)
                
              }
    }

    return (<CategoryContext.Provider value={{
        categories: state.categories,
        getCategories
}}>
    {children}
</CategoryContext.Provider>

    )

}