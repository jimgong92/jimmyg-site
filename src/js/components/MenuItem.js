import React, { Component, PropTypes } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item">
        <span className="menu-item-text">{ this.props.itemName }</span>
      </li>
    );
  }
}

MenuItem.proptypes = {
  itemName: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MenuItem;
