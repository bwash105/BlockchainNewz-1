import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Navibar extends Component {
  render() {
    return (
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">BlockchainNewz</a>
      <ul>
      <li>
          <a href="#brand">Home</a>
      </li>
      </ul>
    </Navbar.Brand>
    {/* <Navbar.Toggle /> */}
  </Navbar.Header>
  <Nav>
      <NavItem eventKey={1} href="#">
      Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
    </Nav>
</Navbar>
    );
  }
}

export default Navibar;
