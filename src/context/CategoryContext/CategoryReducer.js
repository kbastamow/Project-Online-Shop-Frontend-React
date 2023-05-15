const categories = (state, action) => {
    switch (action.type) {
      case "GET_CATEGORIES":  
        return {
          ...state,  
          categories: action.payload,  
       };

       case "CREATE_CATEGORY":
        return {
          ...state,
          categories: [...state.categories, action.payload.category]
        };
        
       default:
        return state;
    }
}

export default categories;