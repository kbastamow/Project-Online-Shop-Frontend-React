import { createContext, useReducer } from "react"
import axios from "axios"
import UserReducer from "./UserReducer"

const API_URL = "http://localhost:3000/"


const token = JSON.parse(localStorage.getItem("shoptoken"))

const initialState = {
    user: null,
    token: token ? token : null,
    registrationMsg: null  //THIS SHOULDN'T REALLY BE HERE??
}

export const UserContext = createContext(initialState);


export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (loginData) => {
        try {
            const res = await axios.post(API_URL + "users/login", loginData)
            console.log(res.data)
            dispatch({
                type: "LOGIN",
                payload: res.data
            });
            if (res.data) localStorage.setItem("shoptoken", JSON.stringify(res.data.token))

        } catch (error) {
            console.error(error)
        }  
}

const register = async(registerData) => {
    try {
        const res = await axios.post(API_URL + "users/createUser", registerData)
        console.log("user who registered: " + res.data.msg)

        dispatch({
            type: "REGISTER",
            payload:res.data.msg
        })
    } catch (error) {
        console.error(error)
    }
}

  return (
    <UserContext.Provider value= {{
        token: state.token,
        user: state.user,
        registrationMsg: state.registrationMsg,
        login,
        register
    }}>
        {children}
    </UserContext.Provider>
  )
}