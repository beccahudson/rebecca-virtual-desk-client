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
            <em>Virtual students</em>, need help with assignments or just have a
            question?
          </p>
          <p>
            Get on demand help from a group of teachers who will pick up your
            question and get you the help you need NOW.
          </p>
        </article>
        <section id="Welcome">
          <img className="heroImage"></img>
        </section>
        <Link to="/login" className="btn">
          <div>LOGIN</div>
        </Link>
      </div>
    );
  }
}
