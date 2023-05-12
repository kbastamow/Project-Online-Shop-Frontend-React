

const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":  
        return {
          ...state,  
          products: action.payload,  
       };
       case "GET_BY_CATEGORY":
         return {
          ...state,
          products: action.payload
          // products: state.products.filter(product=> product.Categories.map(cat=> cat.name).includes(action.payload))  
         };
      case "SEARCH_BY_NAME":
          return {
           ...state,
           products: action.payload,
          };
       case "CREATE_PRODUCT":
        return {
          ...state,
          product: action.payload,
        };
        case "EXTRACT_ONE":
          return {
            ...state,
            product:action.payload,
          };
          
        case "ADD_TO_CART": 
        return {
          ...state,
          cart: [action.payload, ...state.cart ]

        }
      default:
        return state;
    }
  
  };

  export default products;
  
