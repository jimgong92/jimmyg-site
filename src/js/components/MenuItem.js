import React, { Component, PropTypes } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log('hello');
  }
  render() {
    return (
      <li className="menu-item">
        <span
          className="menu-item-text"
          onClick={ this.onClick }
        >
          { this.props.itemName }
        </span>
      </li>
    );
  }
}

MenuItem.proptypes = {
  itemName: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MenuItem;
