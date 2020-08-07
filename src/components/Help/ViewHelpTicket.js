import React, { Component } from 'react';
import Context from '../../Context';
import './Help.css';

export default class ViewHelpTicket extends Component {

    static contextType = Context;

    render() {
        const ticket = this.context.ticketList.find(
          (t) => t.id == this.props.match.params.ticketid
        ) || {};
        return (
        <>
            <section id='ticketInfo'>
                <h2>{this.context.student.first_name} {this.context.student.last_name}</h2>
                <h3>{ticket.question}</h3>
                
            </section>
            <section id='chatBox'>
                
            </section>
            <button className="btn-secondary" onClick={()=>this.props.history.goBack()}>Back</button>
        </>
        )
    }
}
