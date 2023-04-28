const initialState = {
  isLoggedIn: false,
  error: null,
};

const LoginReducer = (state = initialState, action) => {
  console.log("Inside Login Reducer");
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        error: null,
      };

    default:
      return state;
  }
};
export default LoginReducer;
