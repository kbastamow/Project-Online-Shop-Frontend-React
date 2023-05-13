
const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: {name: action.payload.user.name, id: action.payload.user.id, msg: action.payload.msg} 
            };
        case "REGISTER":
            return {
               ...state,
               registrationMsg: action.payload,
            };

        case  "LOGOUT":
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}

export default users

