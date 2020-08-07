import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';


export default class Footer extends Component {

    render() {
        return (
        <footer id='Footer'>
            <div className="itemTriple"><Link to='/'>HOME</Link></div>
            <div className="itemTriple"><Link to='#'>CHAT</Link></div>
            <div className="itemTriple"><Link to='#'>SETTINGS</Link></div>
        </footer>
        )
    }
}