
import { createContext, useReducer } from "react"
import ModalReducer from "./ModalReducer"



const initialState = {
    formModal: false,

}


export const ModalContext = createContext(initialState);

export const ModalProvider = ({children}) => {
    [state, dispatch] = useReducer(ModalReducer, initialState)


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

    return (
        <ModalContext.Provider value={{
            formModal: state.formModal,
            openForm,
            closeForm

        }}>
            {children}
        </ModalContext.Provider>
    );






}