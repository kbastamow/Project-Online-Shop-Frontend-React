import OrderReducer from "./OrderReducer"
import { createContext, useReducer } from "react"
const API_URL = "http://localhost:3000/"
import axios from "axios"


const initialState = {
    orderSuccess: null
}

export const OrderContext = createContext(initialState);




export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const placeOrder = async(cart) => {
        try {
        const newOrder = {"productAndQuantity":[]}    
        const items = cart.map(item => ({"ProductId":item.id, "quantity":item.quantity}))
        items.forEach(item => newOrder.productAndQuantity.push(item));
        
        console.log(newOrder)
        const token = JSON.parse(localStorage.getItem("shoptoken"));
        const res = await axios.post(API_URL + "orders/create", newOrder, {
            headers: {
                "authorization": token
            }
        })
        console.log("this is res data msg", res.data.msg)
        dispatch ({
            type: "PLACE_ORDER",
            payload: res.data.msg
        }) 
        } catch (error) {
            console.error(error)      
        }
    }

  return (
    <OrderContext.Provider value= {{
        orderSuccess: state.orderSuccess,
        placeOrder
       
    }}>
        {children}
    </OrderContext.Provider>
  )
}