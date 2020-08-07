import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.header`
  padding: 0.5em !important;
  margin-bottom: 1em;
  justify-content: center;
  background: #333;
  box-shadow: 3px 3px 5px #00101f;
  height: fit-content;
`;
const H1 = styled.h1`
  color: aquamarine !important;
  font-family: 'Nixie One', cursive;
  font-size: 6vw;
  text-align: center;
  text-shadow: 1.5px 1.5px 3px #000d19,
  -1px 1px 1.5px #ccc;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: 1em auto 0 auto !important;
  border-radius: 50%;
  border: 2px solid #00084b;
  align-self: center;
  display: block;
`;


export default class Header extends Component {
 

  render() {
    return (
      <Head className='Header'>
          <H1>Student's Virtual Desk</H1>
          <Image src="../images/portait.jpg" alt="" />
      </Head>
    )
  }
}
