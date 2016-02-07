import React, { Component, PropTypes } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    console.log('hello');
  }
  render() {
    const { itemName, onClick } = this.props.menuItem;
    return (
      <li className="menu-item">
        <span
          className="menu-item-text"
          onClick={ onClick }
        >
          { itemName }
        </span>
      </li>
    );
  }
}

MenuItem.proptypes = {
  menuItem: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }).isRequired
};

export default MenuItem;
