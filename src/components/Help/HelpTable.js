import React, { Component } from 'react';
// import styled from 'styled-components';
// import HelpTicket from './HelpTicketForm';
// import './Help.css';

import Context from '../../Context';

export default class HelpTable extends Component {
    static contextType = Context;

    renderHelpTable() {
        return Context.ticketList.map((ticket, index) => {
            console.log(this.Context.ticketList);
            console.log(ticket);
        //    const { subject, question, due, ticket_status } = ticket
            const ticketRow =
              <tr>
                 <td>{ticket[index].ticket_status}</td>
                 <td>{ticket[index].subject}</td>
                 <td>{ticket[index].question}</td>
                 <td>{ticket[index].due}</td>
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
            <tbody className='HelpTicket' to="/ViewHelpTicket">
                {this.renderHelpTable} 
            </tbody>
        </table>
        )
    }
}