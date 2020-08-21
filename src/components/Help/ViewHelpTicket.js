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

  render() {
    const ticket =
      this.context.ticketList.find(
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
                  {ticket.ticket_status === "IN PROGRESS" ? (
                    <td className="yellow">{ticket.ticket_status}</td>
                  ) : ticket.ticket_status === "CLOSED" ? (
                    <td className="red">{ticket.ticket_status}</td>
                  ) : (
                    <td className="green">{ticket.ticket_status}</td>
                  )}
                  {/* {ticket.ticket_status ? ticket.ticket_status : "Open"} */}
                </tr>

                {ticket.faculty ? (
                  <tr>
                    <td>Assigned to {ticket.faculty}</td>
                    <td>
                      on
                      {new Intl.DateTimeFormat("en-US").format(ticket.assigned)}
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colspan="2" className="pick-up-ticket">
                      {this.context.user.type === "teacher" ? (
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
              </tbody>
            </table>
          </div>
        </section>

        <button className="btn" onClick={() => this.props.history.goBack()}>
          Back
        </button>
      </div>
    );
  }
}
