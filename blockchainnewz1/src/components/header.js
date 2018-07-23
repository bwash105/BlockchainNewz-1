import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
<Jumbotron>
  <h1>Hello, Blockchainerz!</h1>
  <p>
    This is a one stop news center for everything Blockchain.
  </p>
  <p>
    <Button bsStyle="success">Learn more</Button>
  </p>
</Jumbotron>
    );
  }
}

export default Header;
