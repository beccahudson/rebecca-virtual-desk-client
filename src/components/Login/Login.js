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
      <section id="Login">
        <div className="boxEffect wrapper">
          <div className="form__signIn">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmitJwtAuth}>
              <p>
                <strong>Student Demo Credentials:</strong>
                fake@student.email.com / password
              </p>
              <p>
                <strong>Teacher Demo Credentials:</strong>
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
                  placeholder="EMAIL"
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
                  placeholder="PASSWORD"
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
    ) : (
      <Redirect to="/" />
    );
  }
}
