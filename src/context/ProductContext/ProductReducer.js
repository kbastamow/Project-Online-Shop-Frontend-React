

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
      };
    case "SEARCH_BY_NAME":
      return {
        ...state,
        products: action.payload,
      };

    case "ORDER_BY_PRICE":
      return {
        ...state,
        products: state.products.sort((obj1, obj2) => (obj1.price - obj2.price))
      };

    case "ORDER_ALPHABETICALLY":
      return {
        ...state,
        products: state.products.sort((obj1, obj2) => {
          let nameA = obj1.name;
          let nameB = obj2.name;
          return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0; // 0 = a and b have the same name
        })
      };


    case "ORDER_BY_DATE":
      return {
        ...state,
        products: state.products.sort((obj1, obj2) => {
          let dateA = obj1.createdAt;
          let dateB = obj2.createdAt;
          return (new Date(dateB) - new Date(dateA))
        })
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

    case "CLEAR_PRODUCT":
      return {
        ...state,
        product: action.payload
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

    case "CLEAR_FAVORITES":
      return {
        ...state,
        favorites: []
      }

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

