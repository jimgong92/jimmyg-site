import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { items, activePosition, actions } = this.props;
    const itemList = items.map((item, i) => {
      return <MenuItem 
                key={ item + '_' + i }
                menuItem={ item } 
                active = { i === activePosition }
                makeSelection = { actions.makeSelection }
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
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  activePosition: PropTypes.number.isRequired
};

export default Menu;
