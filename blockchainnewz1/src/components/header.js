import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
<Jumbotron>
  <h1>Hello, Blockchainerz!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>
    );
  }
}

export default Header;