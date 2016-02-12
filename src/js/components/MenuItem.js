import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const { menuItem, makeSelection } = this.props;
    makeSelection(menuItem.itemName);
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
          onClick={ this.onClick }
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
  active: PropTypes.bool.isRequired,
  makeSelection: PropTypes.func.isRequired
};

export default MenuItem;
