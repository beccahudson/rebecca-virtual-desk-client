import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';



const Foot = styled.footer`
    background-color: #333;
    color: #eee;
    width: 100%;
    bottom: 0;
    display: flex;
    margin: 0;
    border-radius: 0 !important;
`;
const ItemTriple = styled.div`
    flex: 3;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    line-height: 1.25em;
    display: flex;
    justify-content: center;
    border-right: 1px solid #eee;

    &:last-child {
        border-right: none;
    }
`;
const Link = styled.a`
    color: aquamarine;
    text-decoration: none;
`;


export default class Footer extends Component {

    render() {
        return (
        <Foot className='Footer'>
            <ItemTriple><Link to='#'>HOME</Link></ItemTriple>
            <ItemTriple><Link to='#'>CHAT</Link></ItemTriple>
            <ItemTriple><Link to='#'>SETTINGS</Link></ItemTriple>
        </Foot>
        )
    }
}