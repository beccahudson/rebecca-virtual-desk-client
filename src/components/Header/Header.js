import React, { Component } from 'react';
import Context from '../../Context';
import '../../App.css';


export default class Header extends Component {
  static contextType = Context;

  render() {
    const userName = this.context.student.first_name || {}
    return (
      <header id='Header'>
        <h1>{userName}'s Virtual Desk</h1>
        <img src="/images/portait.jpg" alt="" />
      </header>
    );
  }
};
