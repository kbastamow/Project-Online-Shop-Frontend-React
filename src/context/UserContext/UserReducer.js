
const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token
            };
        case "REGISTER":
            return {
               ...state,
               registrationMsg: action.payload,
            }
        default:
            return state;
    }
}

export default users

