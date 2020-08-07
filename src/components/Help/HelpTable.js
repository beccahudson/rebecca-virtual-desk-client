import React, { Component } from 'react';
// import styled from 'styled-components';
// import HelpTicket from './HelpTicketForm';
// import './Help.css';

import Context from '../../Context';

export default class HelpTable extends Component {
    static contextType = Context;
    // this creates a class property called context
    // this.context

    handleClick = ticketid => {
        this.props.history.push(`/help/${ticketid}`);
    }

    renderHelpTable() {
        return this.context.ticketList.map(ticket => {

            const { subject, question, due, ticket_status } = ticket
            const ticketRow =
              <tr key={ticket.id} onClick={()=>this.handleClick(ticket.id)}>
                 <td>{ticket_status}</td>
                 <td>{subject}</td>
                 <td>{question}</td>
                 <td>{due}</td>
                 {/* <td>{faculty}</td> */}
              </tr>;
            return ticketRow;
        })
     }

    render() {
        return (
        <table className='HelpTable'>  
            <thead>         
                <tr>
                    <th>Status</th>
                    <th>Subject</th>
                    <th>Question</th>
                    <th>Due</th>
                    <th>TEACHER</th>
                </tr>
            </thead>
            <tbody className='HelpTicket'>
                {this.renderHelpTable()} 
            </tbody>
        </table>
        )
    }
}