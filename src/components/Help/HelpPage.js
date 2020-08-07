import React, { Component } from 'react';
// import config from '../../config';
// import styled from 'styled-components';
// import HelpTable from './HelpTable';
// import HelpApiService from '../../services/help-api-service';
import './Help.css';

import Context from '../../Context';
import HelpTable from './HelpTable';


export default class HelpPage extends Component {
    static contextType = Context;

    //RENDER & HANDLE FUNCTIONS
    
    // goBack = () => {
    //     history.goBack();
    // };

    render() {
        return (        
            <>
            <h1>Help Queue</h1>
            <section className='Help'>            
                <HelpTable />
                <button className="btn go-back">Go Back</button>
                <button className="btn">New</button>
            </section>
            </>
        )
    }
}