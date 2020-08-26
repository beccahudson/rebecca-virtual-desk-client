import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import "../../App.css";

export default class Footer extends Component {
  static contextType = Context;

  render() {
    const { user = {} } = this.context;
    return (
      <footer id="Footer">
        <div className="itemTriple">
          <Link to="/">HOME</Link>
        </div>
        <div className="itemTriple">
          <h3>
            {user.first_name}&nbsp;
            {user.last_name}
          </h3>
        </div>
        <div className="itemTriple">
          {TokenService.hasAuthToken() ? (
            <Link to="/logout">LOGOUT</Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </div>
      </footer>
    );
  }
}
