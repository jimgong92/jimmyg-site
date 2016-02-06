import React, { Component, PropTypes } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu" />
    );
  }
}

Menu.proptypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

Menu.defaultProps = {
  items: [ 'About', 'Blog', 'Connect', 'Demos' ]
};

export default Menu;
