import React, { Component } from "react";
import Context from "../../Context";
import "./Help.css";

export default class HelpTicketForm extends Component {
  static contextType = Context;
  /* state for inputs etc... */

  render() {
    return (
      <form id="HelpTicketForm">
        <h1>Submit New Help Ticket</h1>
        <div class="form-field multi-input">
          <label for="name">Name</label>
          <input
            type="text"
            className="nameInput"
            name="first-name"
            id="name"
            placeholder="first name"
          />
          <input type="text" className="nameInput" placeholder="last name" />
        </div>
        <div class="form-field input-right">
          <label for="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Math" />
        </div>
        <div class="form-field input-right">
          <label for="question">Question</label>
          <input
            type="text"
            name="question"
            id="question"
            placeholder="What is Math?"
          />
        </div>
        <div class="form-field multi-input">
          <label for="dueDate">Due date</label>
          <select name="dueDate" id="dueDate" class="dueDate-select">
            <option selected disabled>
              dd
            </option>
          </select>

          <select name="dob_month" id="dob">
            <option selected disabled>
              mm
            </option>
          </select>
        </div>
        <div class="form-field submit-field">
          <input type="submit" value="Raise Your Hand!" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    );
  }
}
