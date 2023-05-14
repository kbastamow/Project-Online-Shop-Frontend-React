const modalcontrol = (state, action) => {
    switch (action.type) {
      case "OPEN_FORM":  
        return {
          ...state,  
          formModal: action.payload,  
       };
       case "CLOSE_FORM":  
        return {
          ...state,  
          formModal: action.payload,  
       };
   
      default:
        return state;
    }
  
  };

  export default modalcontrol;
  
