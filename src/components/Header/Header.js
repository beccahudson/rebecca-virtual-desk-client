import React, { Component } from "react";
import Context from "../../Context";
import Footer from "../Footer/Footer";
import "../../App.css";

export default class Header extends Component {
  static contextType = Context;

  render() {
    return (
      <header id="Header">
        <h1>Virtual Desk</h1>
        <h3>
          {this.context.user.first_name}
          {this.context.user.last_name}
        </h3>
        <Footer />
      </header>
    );
  }
}
