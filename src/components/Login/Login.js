import React, { Component } from "react";
import Context from "../../Context";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./Login.css";

import { Redirect } from "react-router-dom";

export default class Login extends Component {
  static contextType = Context;
  /* state for inputs etc... */

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.context.getData();
        this.props.history.push("/");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return !this.context.user.email ? (
      <div id="loginPage">
        <h1>Welcome to</h1>
        <h2 className="h1">Virtual Desk</h2>
        <section id="Login">
          <div className="wrapper">
            <div className="form-container">
              <h2>Login</h2>
              <form onSubmit={this.handleSubmitJwtAuth}>
                <p>
                  <strong>Student Demo: </strong>
                  fake@student.email.com / password
                </p>
                <p>
                  <strong>Teacher Demo: </strong>
                  fake@teacher.email.com / password
                </p>
                <div className="form-field multi-input">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    className="emailInput"
                    name="email"
                    id="email"
                    placeholder="email"
                    required
                  />
                </div>

                <div className="form-field multi-input">
                  <label htmlFor="password" className="hidden">
                    Password
                  </label>
                  <input
                    type="password"
                    className="passwordInput"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                  />
                </div>

                <div className="form-field submit-field">
                  <input className="btn" type="submit" value="Login" />
                  <input className="btn" type="reset" value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}
