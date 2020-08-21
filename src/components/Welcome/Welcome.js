import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcomePage">
        <h1>Welcome to</h1>
        <h2 className="h1">Virtual Desk</h2>
        <article>
          <p>
            Virtual students, need help with assignments or just have a
            question?
          </p>
          <p>
            Get on demand help from a pool of teachers who will pick up your
            question and get you the help you need now.
          </p>
          <p>LOGIN BELOW TO GET STARTED</p>
        </article>
        <section id="Welcome">
          <div className="heroImage">
            <img className="welcomeImage" src="/images/hero-image.PNG"></img>
          </div>
          <Link to="/login">
            <button className="btn">LOGIN</button>
          </Link>
        </section>
      </div>
    );
  }
}
