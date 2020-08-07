import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import HelpTable from '../Help/HelpTable';


export default class Dashboard extends Component {

    render() {
        return (
        <>
        <section id="Dashboard">
            <nav id="Teachers" className="col">
                <ul className="group row-wrap">
                    <li className="item">
                        <a href="#" class="btn-round">
                            <img src="/images/portait.jpg" alt=""/>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#" className="btn-round">
                            <img src="/images/portait.jpg" alt=""/>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#" className="btn-round">
                            <img src="/images/portait.jpg" alt=""/>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#" className="btn-round">
                            <img src="/images/portait.jpg" alt=""/>
                        </a>
                    </li>
                    <li className="item">
                        <a href="#" className="btn-round">
                            <img src="/images/portait.jpg" alt=""/>
                        </a>
                    </li>            
                </ul>
            </nav>            
        </section>

        <section id="help-queue" className="wrapper">
            <div className="header group row">
                <button id="collapse" className="btn collapse" type="button">
                    <i
                    className="fa fa-angle-double-down fa-rotate-270"
                    aria-hidden="true"
                    ></i>
                </button>
                <h1 className="item">My Help Queue</h1>
                <button className="btn"><Link to="/help">VIEW ALL</Link>
                    
                    {/* <img src="" /> */}
                </button>
            </div>
            <div  id="table" className="row-wrap collapse">
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
                            <td className="new"><a href="#">NEW</a></td>
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
                            <td className="closed"><a href="#">CLOSED</a></td>
                            <td>MATH</td>
                            <td>graphing help</td>
                            <td>FRI 7/24</td>
                            <td>Mrs. Mentor</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>

        <section id="study-hall" className="wrapper">
          <div className="header group row">
            <button id="collapse" className="btn collapse" type="button">
              <i
                className="fa fa-angle-double-down fa-rotate-270"
                aria-hidden="true"
              ></i>
            </button>
            <h1 className="item">Study Halls</h1>
            <button className="btn">
                    VIEW ALL
                    {/* <img src="" /> */}
                </button>
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
                  <td className="green"><a href="#">NOW</a></td>
                  <td>PRE-ALGEGRA, ALGEBRA</td>
                  <td>MRS. TEACHER</td>
                  <td>20</td>
                  <td><button className="yellowBG">ENTER</button></td>
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

        <section id="sticky-notes" className="wrapper">
          <div className="header group row">
            <button id="collapse" className="btn collapse" type="button">
              <i
                className="fa fa-angle-double-down fa-rotate-270"
                aria-hidden="true"
              ></i>
            </button>
            <h1 className="item">My Sticky Notes</h1>
            <button className="btn">
                    VIEW ALL
                    {/* <img src="" /> */}
                </button>
          </div>
          <div id="notes">
            <div className="group row-wrap">
              <div
                id="note"
                className="item-quad col blue"
                contenteditable
              >
                <h4>NOTE 1</h4>
                <p>Example sticky note.</p>
              </div>
              <div
                id="note"
                className="item-quad col purple"
                contenteditable
              >
                <h4>STUDY HALL SAVED SEAT</h4>
                <p>today 12PM - 1PM</p>
              </div>
              <div
                id="note"
                className="item-quad col orange"
                contenteditable
              >
                <h4>NOTE 1</h4>
                <p>Example sticky note.</p>
              </div>
              <div
                id="note"
                className="item-quad col pink"
                contenteditable
              ></div>
            </div>
          </div>
        </section>
        </>
        );
    }
}