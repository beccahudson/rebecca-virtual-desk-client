import React, { Component } from "react";
import Context from "../../Context";
import HelpApiService from "../../services/help-api-service";
import "./Help.css";

export default class ViewHelpTicket extends Component {
  static contextType = Context;

  claimTicket = (ticketId) => {
    HelpApiService.claimHelpTicket(ticketId).then((newTicket) =>
      this.context.ticketClaimed(ticketId, newTicket)
    );
  };

  render() {
    const ticket =
      this.context.ticketList.find(
        (t) => t.id === Number(this.props.match.params.ticketid)
      ) || {};
    return (
      <>
        <section id="ticketInfo" className="content-wrapper">
          {/* <div> */}
          <p className="item">Subject: {ticket.subject}</p>
          <p className="item">Question: {ticket.question}</p>
          <p className="item">Due Date: {ticket.dueDate}</p>
          {/* </div> */}
          {/* <div> */}
          <p className="item">
            Status: {ticket.ticket_status ? ticket.ticket_status : "Open"}
          </p>
          {ticket.faculty_id ? (
            <p className="item">
              Assigned to {ticket.faculty_id}
              on{" "}
              {new Intl.DateTimeFormat("en-US").format(ticket.ticket_assigned)}
            </p>
          ) : (
            <p className="pick-up-ticket">
              {this.context.user.type === "teacher" ? (
                <button
                  className="btn"
                  onClick={() => this.claimTicket(ticket.id)}
                >
                  Pick Up
                </button>
              ) : (
                "Waiting to be Picked Up"
              )}
            </p>
          )}
          {/* </div> */}
        </section>

        <button
          className="btn-secondary"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button>
      </>
    );
  }
}
