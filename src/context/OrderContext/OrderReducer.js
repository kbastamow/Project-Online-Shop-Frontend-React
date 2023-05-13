const orders = (state, action) => {
    switch (action.type) {
      case "PLACE_ORDER":  
        return {
          ...state,  
          orderSuccess: action.payload,  
       };
       default: return state
    }
}

export default orders;