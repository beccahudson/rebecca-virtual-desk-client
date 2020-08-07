import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../../App.css";

export default class StudySection extends Component {
  render() {
    return (
      <section id="study-hall" className="wrapper">
        <div className="header group row">
          <button id="collapse" className="btn collapse" type="button">
            <i
              className="fa fa-angle-double-down fa-rotate-270"
              aria-hidden="true"
            ></i>
          </button>
          <h1 className="item">Study Halls</h1>
          <button className="btn">VIEW ALL</button>
        </div>
        <div id="study" className="row-wrap collapse">
          <div className="group row">
            <table id="study-table" className="">
              <tr>
                <th>Time</th>
                <th>Subjects</th>
                <th>Instuctor</th>
                <th>Seats</th>
                <th>SCHEDULED</th>
              </tr>
              <tr>
                <td className="green">
                  <a href="#">NOW</a>
                </td>
                <td>PRE-ALGEGRA, ALGEBRA</td>
                <td>MRS. TEACHER</td>
                <td>20</td>
                <td>
                  <button className="yellowBG">ENTER</button>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">1PM - 2PM</a>
                </td>
                <td>BIOLOGY, ANATOMY</td>
                <td>MRS. TEACHER</td>
                <td>15</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <a href="#">FRI (24TH) 2PM - 3PM</a>
                </td>
                <td>US HISTORY</td>
                <td>MRS. TEACHER</td>
                <td>10</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
