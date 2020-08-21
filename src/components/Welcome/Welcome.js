import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <section id="Welcome">
        <div className="heroImage">
          <img
            className="welcomeImage"
            src="/images/virtual-desk-welcome.jpg"
          ></img>
        </div>
        <h2>Welcome</h2>
        <Link to="/login">
          <button className="btn">LOGIN</button>
        </Link>
      </section>
    );
  }
}
