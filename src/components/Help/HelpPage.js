import React, { Component } from "react";
import Header from "../Header/Header";
import HelpTable from "./HelpTable";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./Help.css";

export default class HelpPage extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="helpPage">
        <Header />
        <section id="Help" className="Help wrapper">
          <div className="header group row">
            <h1 className="item">Help Tickets</h1>
            {this.context.user.type === "student" ? (
              <Link to="/newticket">
                <input
                  className="btn"
                  id="new-ticket-btn"
                  type="button"
                  value="NEW TICKET"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div id="table" className="row-wrap collapse">
            <div className="group row">
              <HelpTable {...this.props} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
