import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default class HelpSection extends Component {
  render() {
    return (
      <section id="help-queue" className="wrapper">
        <div className="header group row">
          <button id="collapse" className="btn collapse" type="button">
            <i
              className="fa fa-angle-double-down fa-rotate-270"
              aria-hidden="true"
            ></i>
          </button>
          <h1 className="item">My Help Queue</h1>
          <button className="btn">
            <Link to="/help">VIEW ALL</Link>
          </button>
        </div>
        <div id="table" className="row-wrap collapse">
          <div className="group row">
            {/* <HelpTable /> */}
            <table className="">
              <tr>
                <th>Status</th>
                <th>Subject</th>
                <th>Question</th>
                <th>Due</th>
                <th>TEACHER</th>
              </tr>
              <tr>
                <td className="new">
                  <a href="#">NEW</a>
                </td>
                <td>MATH</td>
                <td>graphing help</td>
                <td>FRI 7/24</td>
                <td></td>
              </tr>
              <tr>
                <td className="assigned">
                  <a href="#">ASSIGNED</a>
                </td>
                <td>MATH</td>
                <td>graphing help</td>
                <td>FRI 7/24</td>
                <td>Mrs. Mentor</td>
              </tr>
              <tr>
                <td className="closed">
                  <a href="#">CLOSED</a>
                </td>
                <td>MATH</td>
                <td>graphing help</td>
                <td>FRI 7/24</td>
                <td>Mrs. Mentor</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
