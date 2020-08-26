import React, { Component } from "react";
import Header from "../Header/Header";
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
  closeTicket = (ticketId) => {
    HelpApiService.closeHelpTicket(ticketId).then((updateTicket) =>
      this.context.ticketClosed(ticketId, updateTicket)
    );
  };
  getTicketStatus = (ticketStatus) => {
    return ticketStatus === "IN PROGRESS" ? (
      <td className="yellow">{ticketStatus}</td>
    ) : ticketStatus === "CLOSED" ? (
      <td className="red">{ticketStatus}</td>
    ) : (
      <td className="green">{ticketStatus}</td>
    );
  };

  render() {
    const { user = {}, ticketList = [], getTicketFaculty } = this.context;

    const ticket =
      ticketList.find(
        (t) => t.id === Number(this.props.match.params.ticketid)
      ) || {};
    return (
      <div id="ticketPage">
        <Header />
        <section id="TicketInfo">
          <div className="wrapper">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Ticket Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subject: </td>
                  <td>{ticket.subject}</td>
                </tr>
                <tr>
                  <td>Question: </td>
                  <td>{ticket.question}</td>
                </tr>
                <tr>
                  <td>Due Date: </td>
                  <td>{ticket.dueDate}</td>
                </tr>
                <tr>
                  <td>Status: </td>
                  {this.getTicketStatus(ticket.ticket_status)}
                </tr>
                {ticket.faculty ? (
                  <tr>
                    <td>{getTicketFaculty(ticket.faculty)}</td>
                    <td>
                      on{" "}
                      {new Intl.DateTimeFormat("en-US").format(
                        new Date(ticket.assigned)
                      )}
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="2" className="pick-up-ticket">
                      {user.type === "teacher" ? (
                        <button
                          className="btn"
                          onClick={() => this.claimTicket(ticket.id)}
                        >
                          PICK UP TICKET
                        </button>
                      ) : (
                        "Waiting to be Picked Up"
                      )}
                    </td>
                  </tr>
                )}
                {ticket.ticket_status === "IN PROGRESS" ? (
                  <tr>
                    <td colSpan="2" className="close-ticket">
                      <button
                        className="btn"
                        onClick={() => this.closeTicket(ticket.id)}
                      >
                        CLOSE TICKET
                      </button>
                    </td>
                  </tr>
                ) : ticket.ticket_status === "CLOSED" ? (
                  <tr>
                    <td colSpan="2" className="close-ticket">
                      Ticket closed on{" "}
                      {new Intl.DateTimeFormat("en-US").format(
                        new Date(ticket.closed)
                      )}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
            <input
              className="btn"
              type="button"
              value="Back"
              onClick={() => this.props.history.goBack()}
            />
          </div>
        </section>
      </div>
    );
  }
}
