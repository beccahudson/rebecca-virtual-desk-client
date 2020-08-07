import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Dashboard extends Component {

    render() {
        return (
        <main className="Dashboard">
            <h2>Welcome</h2>
            <p>lorem ipsum</p>
            <Link to="/help">Help</Link>
        </main>
        )
    }
}