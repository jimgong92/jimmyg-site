import React, { Component } from 'react';
import NameTag from './NameTag';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NameTag name="Jimmy Gong" />
      </header>
    );
  }
}

export default Header;
