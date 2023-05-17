
const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loginMsg: action.payload
            };
        case "REGISTER":
            return {
               ...state,
               registrationMsg: action.payload,
            };

        case  "LOGOUT":
            return {
                ...state,
                token: "",
                user: null,
                logoutMsg: action.payload
            };

        case "CLEAR_MESSAGES":
            return {
                ...state,
                loginMsg: "",
                registrationMsg: "", 
                logoutMsg: ""
            };

        case "FIND_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default users

