import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="header-title center">
          { this.props.name }
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
