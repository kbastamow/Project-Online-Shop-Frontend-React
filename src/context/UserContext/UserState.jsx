import { createContext, useReducer } from "react"
import axios from "axios"
import UserReducer from "./UserReducer"

const API_URL = "http://localhost:3000/"


const token = JSON.parse(localStorage.getItem("shoptoken"))
const user = JSON.parse(localStorage.getItem("shopuser"))

const initialState = {
    user: user ? user : null,
    token: token ? token : "",
    registrationMsg: "",
    loginMsg: "",
    logoutMsg: ""
}

export const UserContext = createContext(initialState);


export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (loginData) => {
        try {
            const res = await axios.post(API_URL + "users/login", loginData)
            dispatch({
                type: "LOGIN",
                payload: res.data
            });
            if (res.data) {
                localStorage.setItem("shoptoken", JSON.stringify(res.data.token))
            //CHANGED THIS ON MONDAY
            localStorage.setItem("shopuser", JSON.stringify({ id: res.data.user.id, email: res.data.user.email, name: res.data.user.name, surname: res.data.user.surname, createdAt: res.data.user.createdAt}))}            
        } catch (error) {
            console.error(error)
            console.error(error.response.data)
            dispatch({
                type: "LOGIN",
                payload:error.response.data
            })
        }
}

const register = async(registerData) => {
    try {
        const res = await axios.post(API_URL + "users/createUser", registerData)
        dispatch({
            type: "REGISTER",
            payload:res.data.msg
        })
        setTimeout(() => {
            dispatch({
                type: "CLEAR"
            })
        }, 2000);
    } catch (error) {
        console.error(error.response.data.messages[0])
        dispatch({
            type: "REGISTER",
            payload:error.response.data.messages[0]
        })
    }
}

const logout = async() => {
    try {
        const token = JSON.parse(localStorage.getItem("shoptoken"))
        //NECESSARY TO PUT empty object in the middle to represent req.body
        const res = await axios.put(API_URL + "users/logout", {}, {
            headers: {
                "authorization": token
            }
        })
        dispatch({
        type: "LOGOUT",
        payload: "Logged out"
       })
       
       if (res.data) {
        localStorage.removeItem("shoptoken");
        localStorage.removeItem("shopuser")
      } 
    } catch (error) {
      console.error(error)
    }
}


const findUser = async() => {
    try {
     
    let userId = JSON.parse(localStorage.getItem("shopuser")).id
    const res = await axios.get(API_URL + "users/userOrderProducts/" + userId)
    dispatch ({
        type: "FIND_USER",
        payload: res.data
    })
    } catch (error) {
        console.error(error)    
    }
}

const clearMessages = () =>{
    setTimeout(() => {
    dispatch({
        type: "CLEAR_MESSAGES"
          }) 
    }, 4000)
}
      

  return (
    <UserContext.Provider value= {{
        token: state.token,
        user: state.user,
        registrationMsg: state.registrationMsg,
        loginMsg: state.loginMsg,
        logoutMsg: state.logoutMsg,
        login,
        register,
        logout,
        clearMessages,
        findUser,

    }}>
        {children}
    </UserContext.Provider>
  )
}