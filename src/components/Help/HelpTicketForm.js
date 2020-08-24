import React, { Component } from "react";
import Header from "../Header/Header";
import Context from "../../Context";
import "./Help.css";

import HelpService from "../../services/help-api-service";

export default class HelpTicketForm extends Component {
  static contextType = Context;

  handleSubmit = (e) => {
    e.preventDefault();
    let newTicket = {
      subject: e.target.subject.value,
      question: e.target.question.value,
      date_due: e.target.date_due.value,
    };
    HelpService.postHelpTicket(newTicket)
      .then((ticket) => this.context.addTicket(ticket))
      .then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div id="ticketFormPage">
        <Header />
        <section id="TicketForm">
          <div className="wrapper">
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <h1>Submit New Help Ticket</h1>
                <div className="form-field input-right">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Math"
                    required
                  />
                </div>
                <div className="form-field input-right">
                  <label htmlFor="question">Question</label>
                  <input
                    type="text"
                    name="question"
                    id="question"
                    placeholder="What is Math?"
                    required
                  />
                </div>
                <div className="form-field multi-input">
                  <label htmlFor="date_due">Due date</label>
                  <input
                    type="date"
                    id="date_due"
                    name="date_due"
                    placeholder="DD-MM-YYYY"
                    aria-label="Due Date"
                  />
                </div>
                <div className="form-field submit-field">
                  <input
                    className="btn"
                    type="submit"
                    value="Raise Your Hand!"
                  />
                  <input className="btn" type="reset" value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </section>
        <button className="btn" onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
    );
  }
}
