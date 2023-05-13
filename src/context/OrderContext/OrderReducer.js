const orders = (state, action) => {
    switch (action.type) {
      case "PLACE_ORDER":  
        return {
          ...state,  
          order: action.payload,  
       };
       default: return state
    }
}

export default orders;