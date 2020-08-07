import React, { Component } from 'react';
import HelpTable from './HelpTable';
import Context from '../../Context';
import './Help.css';


export default class HelpPage extends Component {
    static contextType = Context;


    render() {
        return (        
            <>
            <section id='HelpPage' className='Help'>
                <HelpTable {...this.props} />
                <button className="btn">New</button>
            </section>
            </>
        )
    }
}