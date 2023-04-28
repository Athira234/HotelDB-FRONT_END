const initialState = {
  show: false,
  message: "",
  type: "",
};

const AlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        show: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        show: false,
        message: "",
        type: "",
      };
    default:
      return state;
  }
};

export default AlertReducer;
