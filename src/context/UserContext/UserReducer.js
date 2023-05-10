
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
               registrationMsg: action.payload
                 //I NEED SOMETHING HERE TO GET A MESSGAGE THAT THE POST WAS SUCCESSFUL
            }
        default:
            return state;
    }
}

export default users

