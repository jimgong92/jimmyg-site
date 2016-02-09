import React, { Component, PropTypes } from 'react';
import NameTag from './NameTag';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NameTag name={ this.props.name } />
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
