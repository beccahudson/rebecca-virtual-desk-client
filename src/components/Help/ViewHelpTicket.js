import React, { Component } from 'react';
import Context from '../../Context';

export default class ViewHelpTicket extends Component {

    static contextType = Context;

    render() {
        const ticket = this.context.ticketList.find(
          (t) => t.id == this.props.match.params.ticketid
        ) || {};
        return (
        <>
            <section className='ticketInfo'>
                <button onClick={()=>this.props.history.goBack()}>Back</button>
                <h2>{ticket.question}</h2>
            </section>
            <section className='chatBox'>
                
            </section>
        </>
        )
    }
}
