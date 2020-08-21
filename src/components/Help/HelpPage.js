import React, { Component } from "react";
import HelpTable from "./HelpTable";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./Help.css";

export default class HelpPage extends Component {
  static contextType = Context;

  render() {
    return (
      <section id="HelpPage" className="Help wrapper">
        <div className="header group row">
          <h1 className="item">Help Tickets</h1>
          <Link to="/newticket">
            <button id="new-ticket-btn" className="btn">
              NEW
            </button>
          </Link>
        </div>
        <div id="table" className="row-wrap collapse">
          <div className="group row">
            <HelpTable {...this.props} />
          </div>
        </div>
      </section>
    );
  }
}
