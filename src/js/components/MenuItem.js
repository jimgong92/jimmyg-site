import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemName, handleSelect } = this.props.menuItem;
    const className = cx({
      'jimmy-sprite': true,
      'invisible': !this.props.active
    });

    return (
      <li className="menu-item">
        <div className="menu-item-indent" />
        <div className={ className } />
        <span
          className="menu-item-text"
          onClick={ handleSelect }
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
    handleSelect: PropTypes.func.isRequired
  }).isRequired,
  active: PropTypes.bool.isRequired
};

export default MenuItem;
