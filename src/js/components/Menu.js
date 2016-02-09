import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const itemList = this.props.items.map((item, i) => {
      return <MenuItem 
                key={ i }
                menuItem={ item } 
                active = { i === 0 }
              />;
    });
    return (
      <ul className="menu">
        { itemList }
      </ul>
    );
  }
}

Menu.proptypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Menu;
