import React, { Component, PropTypes } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemName, onClick } = this.props.menuItem;
    const activity = this.props.active ? '' : ' invisible';
    return (
      <li className="menu-item">
        <div className="menu-item-indent" />
        <div className={ 'jimmy-sprite' + activity } />
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
  }).isRequired,
  active: PropTypes.bool.isRequired
};

export default MenuItem;
