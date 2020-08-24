import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "../../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="Footer">
          <div className="itemTriple">
            <Link to="/">HOME</Link>
          </div>
          <div className="itemTriple">
            <img src="/portrait.png" alt="User Portait" />
          </div>
          <div className="itemTriple">
            {TokenService.hasAuthToken() ? (
              <Link to="/logout">LOGOUT</Link>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </div>
        </footer>
      </div>
    );
  }
}
