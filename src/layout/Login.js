import React, { Component } from "react";
import "../assets/Styles/Login.css";
import { Button } from "../core/Button";
import LoginHandler from "../handler/LoginHandler";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../redux/actions/LoginAction";

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  loginHandler(e) {
    e.preventDefault();
    console.log(this.props.isLoggedIn);
    const history = this.props.history;
    console.log("inside loginHandler");
    LoginHandler(this.state.username, this.state.password, this.props.login, {
      history,
    });
  }

  render() {
    return (
      <div>
        <div className="contain">
          {/* <AppBar /> */}
          <div className="form">
            <form className="loginform" onSubmit={this.loginHandler}>
              <div className="login">Login</div>
              <br />
              <div className="name">Username</div>
              <br />
              <input
                className="myinput"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <br />
              <div className="name"> Password</div>
              <br />
              <input
                className="myinput"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <Button label="LOGIN" />
              <p style={{ marginLeft: "100px" }}>
                Don't Have an Account? Login
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
//export default Login;
