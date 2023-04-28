function LoginHandler(username, password, login, { history }) {
  console.log("inside Login handler");
  console.log(username, password);
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{4,15}$/;
  if (regex.test(password)) {
    console.log("inside if");
    login(username, password);
    history.push("/hotels");
  }
}
export default LoginHandler;
