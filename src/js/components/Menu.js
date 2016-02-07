import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    const itemList = this.props.items.map(item => {
      return <MenuItem itemName={ item } />;
    });
    return (
      <ul className="menu">
        { itemList }
      </ul>
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
