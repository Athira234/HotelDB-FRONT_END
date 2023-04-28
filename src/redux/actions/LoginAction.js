const LOGIN = "LOGIN";

export const login = (username, password) => {
  console.log("inside login action");
  console.log(username, password);
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
};
