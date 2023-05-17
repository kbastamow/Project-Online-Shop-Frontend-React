
import { createContext, useReducer } from "react"
import ModalReducer from "./ModalReducer"



const initialState = {
    formModal: false,
    cartModal: false

}


export const ModalContext = createContext(initialState);

export const ModalProvider = ({children}) => {
   const [state, dispatch] = useReducer(ModalReducer, initialState)

    const openForm = () => {
        dispatch({
            type: "OPEN_FORM",
            payload: true
        })
    }

    const closeForm = () => {
        dispatch({
            type: "CLOSE_FORM",
            payload: false
        })
    }

    const openCart = () => {
        dispatch({
            type: "OPEN_CART",
            payload: true
        })
    }

    const closeCart = () => {
        dispatch({
            type: "CLOSE_CART",
            payload: false
        })
    }
    
    

    return (
        <ModalContext.Provider value={{
            formModal: state.formModal,
            cartModal: state.cartModal,
            openForm,
            closeForm,
            openCart,
            closeCart


        }}>
            {children}
        </ModalContext.Provider>
    )

}