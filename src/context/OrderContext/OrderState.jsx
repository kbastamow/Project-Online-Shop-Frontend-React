import OrderReducer from "./OrderReducer"
import { createContext, useReducer } from "react"
const API_URL = "http://localhost:3000/"
import axios from "axios"
import { compileStringAsync } from "sass"


const token = JSON.parse(localStorage.getItem("shoptoken"))

const initialState = {
    order: null,
    token: token ? token : null,
}

export const OrderContext = createContext(initialState);


export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const placeOrder = async(cart) => {
        try {
        const newOrder = {productAndQuantity:[]}
        cart.map(item => ({"ProductId":item.id}, {"quantity":item.quantity}))
        
        console.log(newOrder)
        // const token = JSON.parse(localStorage.getItem("token"));
        // const res = await axios.post(API_URL + "orders/create", newOrder, {
        //     headers: {
        //         "authorization": token
        //     }
        // })
        // console.log(res)
           
        } catch (error) {
            console.error(error)
            
        }
    }

  return (
    <OrderContext.Provider value= {{
        order: state.order,
        placeOrder
       
    }}>
        {children}
    </OrderContext.Provider>
  )
}