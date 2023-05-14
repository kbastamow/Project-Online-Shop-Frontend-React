import { createContext, useReducer } from "react"
import axios from "axios"
import UserReducer from "./UserReducer"

const API_URL = "http://localhost:3000/"


const token = JSON.parse(localStorage.getItem("shoptoken"))
const user = JSON.parse(localStorage.getItem("shopuser"))
console.log("what is happening at userState")
const initialState = {
    user: user ? user : null,
    token: token ? token : null,
    registrationMsg: ""
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
            if (res.data) localStorage.setItem("shopuser", JSON.stringify({ id: res.data.user.id, name: res.data.user.name,}))
            console.log(res.data.user)

        } catch (error) {
            console.error(error)
        }  
}

const register = async(registerData) => {
    console.log("axios in progress!")
    try {
        const res = await axios.post(API_URL + "users/createUser", registerData)
        console.log("user who registered: " + res.data.msg)
        dispatch({
            type: "REGISTER",
            payload:res.data.msg
        })
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
        console.log(res)
        
        dispatch({
        type: "LOGOUT",
        payload: res
       })
       
       if (res.data) {
        localStorage.removeItem("shoptoken");
        localStorage.removeItem("shopuser")
      } 
    } catch (error) {
      console.log(error)
    }
}


const findUser = async() => {
    try {
    let userId = JSON.parse(localStorage.getItem("shopuser")).id
    const res = await axios.get(API_URL + "users/userOrderProducts/" + userId)
    console.log(res.data)
    dispatch ({
        type: "FIND_USER",
        payload: res.data
    })
    } catch (error) {
        console.log(error)
        
    }
    

}

  return (
    <UserContext.Provider value= {{
        token: state.token,
        user: state.user,
        registrationMsg: state.registrationMsg,
        login,
        register,
        logout,
        findUser
    }}>
        {children}
    </UserContext.Provider>
  )
}