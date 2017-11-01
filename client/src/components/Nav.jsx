import React, { Component } from "react";
import styled from 'styled-components';

export default class Nav extends Component {
  render() {
    const Nav = styled.nav`
      color: white;
      background: blue;
    `;

    return (
      <Nav>
        <h1>Nav!</h1>
      </Nav>
    );
  }
}
