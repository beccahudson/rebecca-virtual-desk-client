import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../../App.css";

export default class NotesSection extends Component {
  render() {
    return (
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
            <div id="note" className="item-quad col blue" contenteditable>
              <h4>NOTE 1</h4>
              <p>Example sticky note.</p>
            </div>
            <div id="note" className="item-quad col purple" contenteditable>
              <h4>STUDY HALL SAVED SEAT</h4>
              <p>today 12PM - 1PM</p>
            </div>
            <div id="note" className="item-quad col orange" contenteditable>
              <h4>NOTE 1</h4>
              <p>Example sticky note.</p>
            </div>
            <div id="note" className="item-quad col pink" contenteditable></div>
          </div>
        </div>
      </section>
    );
  }
}
