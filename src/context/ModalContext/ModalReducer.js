const modalcontrol = (state, action) => {
    switch (action.type) {
      case "OPEN_FORM":  
        return {
          ...state,  
          form: action.payload,  
       };
       case "CLOSE_FORM":  
        return {
          ...state,  
          form: action.payload,  
       };
   
      default:
        return state;
    }
  
  };

  export default modalcontrol;
  
