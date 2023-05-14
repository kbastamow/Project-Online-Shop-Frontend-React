
const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: {id: action.payload.user.id, name: action.payload.user.name, msg: action.payload.msg} 
            };
        case "REGISTER":
            return {
               ...state,
               registrationMsg: action.payload,
            };

        case  "LOGOUT":
            return {
                ...state,
                token: null,
                user: null
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

