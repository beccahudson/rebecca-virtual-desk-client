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
        <Footer />
      </header>
    );
  }
}
