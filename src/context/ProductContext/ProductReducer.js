

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
            product: action.payload,
          };

          case "ADD_FAVORITE":
            return {
              ...state,
              favorites: [action.payload, ...state.favorites]
            };  

        case "DELETE_FAVORITE":
          return {
            ...state,
            favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)
          };
         
        case "SEE_FAVORITES":
          return {
            ...state,
           products: action.payload,
          };     
          
        case "ADD_TO_CART": 
        return {
          ...state,
          cart: action.payload //replace cart each time - if quantity changes we just update existing
        };

        case "CHANGE_QUANTITY": 
        return {
          ...state,
          cart: action.payload
        };

        case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item.id !== action.payload.id
          ),
        }

        case "CLEAR_CART":
          return {
            ...state,
            cart: []
          }
      default:
        return state;
    }
  
  };

  export default products;
  
