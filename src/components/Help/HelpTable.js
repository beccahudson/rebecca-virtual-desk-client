import React, { Component } from "react";
import Context from "../../Context";
import "./Help.css";

export default class HelpTable extends Component {
  static contextType = Context;
  // this creates a class property called context
  // this.context

  handleClick = (ticketid) => {
    this.props.history.push(`/help/${ticketid}`);
  };

  renderHelpTable() {
    return this.context.ticketList.map((ticket) => {
      const { ticket_status, subject, question, dueDate, faculty } = ticket;
      const ticketRow = (
        <tr
          className="tableBodyRow"
          key={ticket.id}
          onClick={() => this.handleClick(ticket.id)}
        >
          <td>{ticket_status}</td>
          <td>{subject}</td>
          <td className="question">{question}</td>
          <td>{dueDate}</td>
          <td>{faculty}</td>
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
