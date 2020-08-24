import React, { Component } from "react";
import Context from "../../Context";
import "./Help.css";

export default class HelpTable extends Component {
  static contextType = Context;

  handleClick = (ticketid) => {
    this.props.history.push(`/help/${ticketid}`);
  };

  renderHelpTable() {
    return this.context.ticketList.map((ticket) => {
      console.log(ticket);
      const { ticket_status, subject, question, dueDate, faculty } = ticket;
      const ticketRow = (
        <tr
          className="tableBodyRow"
          key={ticket.id}
          onClick={() => this.handleClick(ticket.id)}
        >
          {this.context.getTicketStatus(ticket_status)}
          <td>{subject}</td>
          <td className="question">{question}</td>
          <td>{dueDate}</td>
          <td>
            {ticket_status === "IN PROGRESS"
              ? this.context.getTicketFaculty(faculty)
              : ticket_status === "CLOSED"
              ? `Ticket ${ticket_status.toLowerCase()} on 
                ${new Intl.DateTimeFormat("en-US").format(
                  new Date(ticket.closed)
                )}`
              : ""}
          </td>
        </tr>
      );
      return ticketRow;
    });
  }

  render() {
    return (
      <>
        <table id="HelpTable">
          <thead className="tableHead">
            <tr>
              <th>Status</th>
              <th>Subject</th>
              <th>Question</th>
              <th>Due</th>
              <th>TEACHER</th>
            </tr>
          </thead>
          <tbody className="helpTicket">{this.renderHelpTable()}</tbody>
        </table>
      </>
    );
  }
}
