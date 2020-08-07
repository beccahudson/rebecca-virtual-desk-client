import React, { Component } from 'react';
// import styled from 'styled-components';
import './HelpQueue.css';

import Context from '../../Context';

export default class HelpTicketForm extends Component {
    static contextType = Context;
    /* state for inputs etc... */

    render() {
        return (
            <form className="HelpTicketForm">
                <label for="fName">First Name<input type="text" required/></label>
                <label for="lName">Last Name<input type="text" required/></label>
                <label for="subject">Subject/Class<input type="text" required/></label>
                <label for="question">Question<input type="text" required/></label>
                <label for="dueDate">Due Date<input type="date" /></label>
                <input className="btn reset" type="reset" value="Reset" />
                <input className="btn" type="submit" value="Submit" />
            </form>
            
        )
    }
}


