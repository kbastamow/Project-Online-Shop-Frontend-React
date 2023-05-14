const orders = (state, action) => {
    switch (action.type) {
      case "PLACE_ORDER":  
        return {
          ...state,  
          orderSuccess: action.payload,  
       };
       case "PAST_ORDERS": 
       return {
        ...state,
        orders: action.payload
       }

       default: return state
    }
}

export default orders;